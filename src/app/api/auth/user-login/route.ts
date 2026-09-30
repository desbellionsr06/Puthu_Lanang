import { NextResponse } from 'next/server';
import { usersData } from '../../../../../server/data/store';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { no_whatsapp, password } = body;

    if (!no_whatsapp || !password) {
      return NextResponse.json(
        { success: false, message: 'Nomor WhatsApp dan Password wajib diisi!' },
        { status: 400 }
      );
    }

    const existingUser = usersData.find(
      (u) => (u.no_whatsapp === no_whatsapp || u.id === no_whatsapp) && u.password === password
    );

    if (existingUser) {
      return NextResponse.json({
        success: true,
        message: 'Login Pelanggan Berhasil',
        token: `user-token-${existingUser.id}`,
        role: existingUser.role,
        user: {
          id: existingUser.id,
          nama: existingUser.nama,
          no_whatsapp: existingUser.no_whatsapp,
          role: existingUser.role,
        },
      });
    }

    // Auto register for seamless testing
    const newUser = {
      id: `usr-${Date.now()}`,
      nama: 'Pecinta Kuliner',
      no_whatsapp,
      password,
      role: 'user' as const,
      createdAt: new Date().toISOString(),
    };
    usersData.push(newUser);

    return NextResponse.json({
      success: true,
      message: 'Login Pelanggan Berhasil (Sesi Baru)',
      token: `user-token-${newUser.id}`,
      role: newUser.role,
      user: {
        id: newUser.id,
        nama: newUser.nama,
        no_whatsapp: newUser.no_whatsapp,
        role: newUser.role,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Gagal memproses login user' },
      { status: 500 }
    );
  }
}
