import { NextResponse } from 'next/server';
import { users } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phone, password } = body;

    if (!phone || !password) {
      return NextResponse.json(
        { error: 'Nomor WhatsApp dan Password wajib diisi.' },
        { status: 400 }
      );
    }

    const user = users.find((u) => u.phone === phone);
    if (!user || user.passwordHash !== password) {
      return NextResponse.json(
        { error: 'Nomor WhatsApp atau Password salah.' },
        { status: 401 }
      );
    }

    const token = `JWT_TOKEN_PUTHU_${user.id}_${Date.now()}`;

    return NextResponse.json({
      message: 'Login berhasil!',
      user: {
        id: user.id,
        name: user.name,
        phone: user.phone
      },
      token
    });
  } catch (error) {
    return NextResponse.json({ error: 'Gagal memproses login' }, { status: 500 });
  }
}
