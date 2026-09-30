import { NextResponse } from 'next/server';
import { users, User } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, password } = body;

    if (!name || !phone || !password) {
      return NextResponse.json(
        { error: 'Nama, Nomor WhatsApp, dan Password wajib diisi.' },
        { status: 400 }
      );
    }

    // Check if phone already registered
    const existing = users.find((u) => u.phone === phone);
    if (existing) {
      return NextResponse.json(
        { error: 'Nomor WhatsApp sudah terdaftar. Silakan Masuk.' },
        { status: 409 }
      );
    }

    const newUser: User = {
      id: `usr-${Date.now()}`,
      name,
      phone,
      passwordHash: password,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);

    const token = `JWT_TOKEN_PUTHU_${newUser.id}_${Date.now()}`;

    return NextResponse.json({
      message: 'Registrasi akun berhasil!',
      user: {
        id: newUser.id,
        name: newUser.name,
        phone: newUser.phone
      },
      token
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Gagal memproses registrasi' }, { status: 500 });
  }
}
