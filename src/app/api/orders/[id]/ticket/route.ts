import { NextResponse } from 'next/server';
import { orders } from '@/lib/db';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const order = orders.find((o) => o.id === id);

  if (!order) {
    return NextResponse.json({ error: 'Tiket pesanan tidak ditemukan' }, { status: 404 });
  }

  return NextResponse.json({
    status: 'success',
    ticket: {
      orderId: order.id,
      customerName: order.customerName,
      customerPhone: order.customerPhone,
      pickupType: order.pickupType,
      pickupDate: order.pickupDate,
      pickupTimeSlot: order.pickupTimeSlot,
      items: order.items,
      totalPrice: order.totalPrice,
      paymentMethod: order.paymentMethod,
      paymentStatus: order.paymentStatus,
      kitchenStatus: order.kitchenStatus,
      qrCodeToken: order.qrCodeToken,
      kitchenQueueNumber: 4,
      estimatedReadyTime: '17:45 WIB',
      createdAt: order.createdAt
    }
  });
}
