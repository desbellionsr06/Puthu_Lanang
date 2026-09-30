import { NextResponse } from 'next/server';
import { MENU_ITEMS } from '@/lib/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const search = searchParams.get('search');

  let filtered = [...MENU_ITEMS];

  if (category && category !== 'semua') {
    filtered = filtered.filter((item) => item.category === category);
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (item) => item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)
    );
  }

  return NextResponse.json({
    status: 'success',
    total: filtered.length,
    data: filtered,
    kitchenNotice: 'Sedang Mengukus Bambu (Est. Antrean 15 Menit)'
  });
}
