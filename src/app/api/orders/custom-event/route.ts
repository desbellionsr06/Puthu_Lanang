import { NextResponse } from 'next/server';
import { customEventOrders, CustomEventOrder } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      eventDate,
      pickupTime,
      packageType,
      packagePrice,
      compositionRatio,
      customerContact,
      notes
    } = body;

    if (!eventDate || !packageType || !customerContact?.name || !customerContact?.phone) {
      return NextResponse.json(
        { error: 'Informasi tanggal acara, paket, nama, dan kontak WA wajib diisi.' },
        { status: 400 }
      );
    }

    const customOrderId = `TMPH-${Math.floor(1000 + Math.random() * 9000)}`;

    const newCustomOrder: CustomEventOrder = {
      id: customOrderId,
      eventDate,
      pickupTime: pickupTime || '16:00 WIB',
      packageType,
      packagePrice: packagePrice || 150000,
      compositionRatio: compositionRatio || { puthu: 25, klepon: 25, cenil: 25, lupis: 25 },
      customerContact,
      notes,
      status: 'SUBMITTED',
      createdAt: new Date().toISOString()
    };

    customEventOrders.push(newCustomOrder);

    // Format WhatsApp message text
    const waText = encodeURIComponent(
      `*PESANAN KHUSUS TAMPAH / HAJATAN PUTHU LANANG*\n` +
      `ID Pesanan: ${customOrderId}\n` +
      `Pemesan: ${customerContact.name} (${customerContact.phone})\n` +
      `Instansi/Acara: ${customerContact.institution || '-'}\n` +
      `Tanggal & Jam Tiba: ${eventDate} @ ${pickupTime}\n` +
      `Paket: ${packageType}\n` +
      `Komposisi Varian:\n` +
      ` - Puthu: ${compositionRatio?.puthu || 25}%\n` +
      ` - Klepon: ${compositionRatio?.klepon || 25}%\n` +
      ` - Cenil: ${compositionRatio?.cenil || 25}%\n` +
      ` - Lupis: ${compositionRatio?.lupis || 25}%\n` +
      `Catatan: ${notes || '-'}\n\n` +
      `Mohon konfirmasi pesanan tampah kami. Terima Kasih!`
    );

    const waLink = `https://wa.me/6281234567890?text=${waText}`;

    return NextResponse.json({
      message: 'Kalkulasi & Pemesanan Tampah Berhasil!',
      customOrder: newCustomOrder,
      whatsappRedirectUrl: waLink
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Gagal memproses pesanan khusus' }, { status: 500 });
  }
}
