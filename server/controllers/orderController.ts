import { Request, Response } from 'express';
import { ordersData, OrderData } from '../data/store';

export const getOrders = (req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    total: ordersData.length,
    data: ordersData,
  });
};

export const createOrder = (req: Request, res: Response) => {
  const { nama, outlet, jadwal_ambil, items, total_harga, qr_code_token, catatan, no_whatsapp, tanggal_ambil } = req.body;

  if (!nama || !outlet || !jadwal_ambil || !items || !total_harga) {
    return res.status(400).json({
      success: false,
      message: 'Semua field wajib (nama, outlet, jadwal_ambil, items, total_harga) diisi!',
    });
  }

  const newOrder: OrderData = {
    id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
    nama,
    outlet: outlet || 'Pusat Celaket',
    jadwal_ambil,
    tanggal_ambil: tanggal_ambil || 'Hari Ini',
    items: items || [],
    total_harga: Number(total_harga),
    qr_code_token: qr_code_token || `PL-QR-${Math.floor(100000 + Math.random() * 900000)}`,
    status: 'Baru',
    catatan: catatan || '-',
    no_whatsapp: no_whatsapp || '081234567890',
    createdAt: new Date().toISOString(),
  };

  ordersData.unshift(newOrder);

  return res.status(201).json({
    success: true,
    message: 'Pesanan Smart Takeaway Berhasil Dibuat!',
    data: newOrder,
  });
};

export const updateOrderStatus = (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  const validStatuses = ['Baru', 'Diproses', 'Selesai', 'Bisa Diambil', 'Dibatalkan'];
  if (!status || !validStatuses.includes(status)) {
    return res.status(400).json({
      success: false,
      message: `Status tidak valid! Pilih salah satu: ${validStatuses.join(', ')}`,
    });
  }

  const order = ordersData.find((o) => o.id === id);
  if (!order) {
    return res.status(404).json({
      success: false,
      message: `Pesanan dengan ID ${id} tidak ditemukan!`,
    });
  }

  order.status = status;

  return res.status(200).json({
    success: true,
    message: `Status pesanan ${id} berhasil diperbarui menjadi '${status}'`,
    data: order,
  });
};

export const getOrderById = (req: Request, res: Response) => {
  const { id } = req.params;

  const order = ordersData.find((o) => o.id === id);
  if (!order) {
    return res.status(404).json({
      success: false,
      message: `Pesanan ${id} tidak ditemukan!`,
    });
  }

  return res.status(200).json({
    success: true,
    data: order,
    ticket_status: {
      qr_code: order.qr_code_token,
      is_valid: true,
      pickup_location: order.outlet === 'Pusat Celaket' ? 'Jl. Jaksa Agung Suprapto No. 73' : 'Jl. MT Haryono No. 195',
      time_slot: order.jadwal_ambil,
    },
  });
};
