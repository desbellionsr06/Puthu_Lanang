import { NextResponse } from 'next/server';
import { usersData } from '../../../../../server/data/store';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nama, no_whatsapp, password } = body;

    if (!nama || !no_whatsapp || !password) {
      return NextResponse.json(
        { success: false, message: 'Nama, Nomor WhatsApp, dan Password wajib diisi!' },
        { status: 400 }
      );
    }

    const isDuplicate = usersData.some((u) => u.no_whatsapp === no_whatsapp);
    if (isDuplicate) {
      return NextResponse.json(
        { success: false, message: 'Nomor WhatsApp sudah terdaftar! Silakan login.' },
        { status: 400 }
      );
    }

    const newUser = {
      id: `usr-${Date.now()}`,
      nama,
      no_whatsapp,
      password,
      role: 'user' as const,
      createdAt: new Date().toISOString(),
    };
    usersData.push(newUser);

    return NextResponse.json(
      {
        success: true,
        message: 'Registrasi Akun Pelanggan Berhasil!',
        user: {
          id: newUser.id,
          nama: newUser.nama,
          no_whatsapp: newUser.no_whatsapp,
          role: newUser.role,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Gagal memproses registrasi' },
      { status: 500 }
    );
  }
}
