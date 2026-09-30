import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: 'Username dan Password wajib diisi!' },
        { status: 400 }
      );
    }

    if (username === 'admin' && password === 'admin123') {
      return NextResponse.json({
        success: true,
        message: 'Login Admin Berhasil',
        token: 'mock-admin-jwt-token-puthu-lanang-1935',
        role: 'admin',
        user: {
          id: 'usr-admin-1',
          nama: 'Administrator Utama',
          username: 'admin',
          role: 'admin',
        },
      });
    }

    return NextResponse.json(
      { success: false, message: 'Kredensial Admin tidak valid! Gunakan admin/admin123' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Gagal memproses login admin' },
      { status: 500 }
    );
  }
}
