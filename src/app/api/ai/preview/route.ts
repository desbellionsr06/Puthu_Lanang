import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    feature: 'AI Smart Queue & Inventory Estimator',
    description:
      'AI Smart Queue & Inventory Estimator untuk memprediksi durasi pengukusan bambu dan lonjakan antrean gerai Celaket Malang',
    specifications: {
      model_type: 'Time-Series Queue Predictor & Demand Forecaster',
      target_outlet: 'Gerai Utama Celaket & Cabang Dinoyo',
      key_capabilities: [
        'Prediksi estimasi menit waktu tunggu pengukusan puthu bambu realtime',
        'Notifikasi pengisian ulang stok parutan kelapa & gula aren cair',
        'Optimasi slot waktu penjemputan Smart Takeaway jam 17:00-19:00 WIB',
      ],
    },
  });
}
