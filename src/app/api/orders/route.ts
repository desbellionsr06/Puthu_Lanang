import { NextResponse } from 'next/server';
import { orders, Order, OrderItem } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      userId,
      customerName,
      customerPhone,
      items,
      pickupType = 'SCHEDULED_PICKUP',
      pickupDate = new Date().toISOString().split('T')[0],
      pickupTimeSlot = '17:30 - 18:00 WIB',
      paymentMethod = 'QRIS'
    } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'Keranjang belanja tidak boleh kosong' }, { status: 400 });
    }

    const calculatedTotal = items.reduce(
      (acc: number, curr: OrderItem) => acc + curr.price * curr.quantity,
      0
    );

    const orderId = `ORD-${Math.floor(10000 + Math.random() * 90000)}`;
    const qrCodeToken = `PUTHU-CELAKET-${orderId}-${Date.now().toString(36).toUpperCase()}`;

    const newOrder: Order = {
      id: orderId,
      userId: userId || 'GUEST',
      customerName: customerName || 'Pelanggan Puthu Lanang',
      customerPhone: customerPhone || '08xxxxxxxxxx',
      items,
      totalPrice: calculatedTotal,
      pickupType,
      pickupDate,
      pickupTimeSlot,
      paymentMethod,
      paymentStatus: 'PAID',
      kitchenStatus: 'STEAMING_BAMBOO',
      qrCodeToken,
      createdAt: new Date().toISOString()
    };

    orders.unshift(newOrder);

    return NextResponse.json({
      message: 'Pesanan berhasil dibuat!',
      order: newOrder
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Gagal memproses pesanan' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'success',
    total: orders.length,
    data: orders
  });
}
