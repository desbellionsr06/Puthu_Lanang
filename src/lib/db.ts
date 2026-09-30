export interface MenuItem {
  id: string;
  name: string;
  category: 'pusaka' | 'paling_laris' | 'besek' | 'paket_campur';
  description: string;
  portionDetails: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  ingredients: string[];
  allergens: string[];
  isAvailable: boolean;
  stockRemaining: number;
  preparationTimeMins: number;
}

export interface OrderItem {
  menuId: string;
  name: string;
  quantity: number;
  price: number;
  notes?: string;
}

export interface Order {
  id: string;
  userId: string;
  customerName: string;
  customerPhone: string;
  items: OrderItem[];
  totalPrice: number;
  pickupType: 'TAKEAWAY_NOW' | 'SCHEDULED_PICKUP';
  pickupDate: string;
  pickupTimeSlot: string;
  paymentMethod: string;
  paymentStatus: 'PAID' | 'PENDING';
  kitchenStatus: 'QUEUED_IN_KITCHEN' | 'STEAMING_BAMBOO' | 'READY_FOR_PICKUP' | 'COMPLETED';
  qrCodeToken: string;
  createdAt: string;
}

export interface CustomEventOrder {
  id: string;
  eventDate: string;
  pickupTime: string;
  packageType: string;
  packagePrice: number;
  compositionRatio: {
    puthu: number;
    klepon: number;
    cenil: number;
    lupis: number;
  };
  customerContact: {
    name: string;
    phone: string;
    institution?: string;
  };
  notes?: string;
  status: 'SUBMITTED' | 'CONFIRMED' | 'IN_PREPARATION';
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  phone: string;
  passwordHash: string;
  createdAt: string;
}

// In-Memory Mock Database
export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'puthu-01',
    name: 'Puthu Tradisional Bambu',
    category: 'pusaka',
    description: 'Puthu beras pandan suji wangi berisikan lelehan gula aren murni, dikukus dalam tabung bambu clungup dan disajikan hangat dengan taburan kelapa gurih.',
    portionDetails: '1 Porsi = 5 Tabung Bambu Puthu',
    price: 18000,
    rating: 4.9,
    reviewsCount: 342,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80',
    ingredients: ['Tepung Beras Pandan Suji', 'Gula Aren Murni Trenggalek', 'Kelapa Parut Kukus', 'Garam Laut'],
    allergens: ['Bebas Gluten / Bebas Bahan Pengawet'],
    isAvailable: true,
    stockRemaining: 120,
    preparationTimeMins: 10
  },
  {
    id: 'klepon-02',
    name: 'Klepon Gula Aren Lumer',
    category: 'paling_laris',
    description: 'Bola-bola tepung ketan pandan asli bertekstur kenyal lembut dengan isian juruh gula aren leleh murni yang meletus manis segar di dalam mulut.',
    portionDetails: '1 Porsi = 8 Biji Klepon Murni',
    price: 18000,
    rating: 4.9,
    reviewsCount: 428,
    image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80',
    ingredients: ['Tepung Ketan Murni', 'Daun Suji & Pandan Wangi', 'Gula Aren Organik', 'Kelapa Muda Parut'],
    allergens: ['Bebas Bahan Pengawet & Pewarna Buatan'],
    isAvailable: true,
    stockRemaining: 95,
    preparationTimeMins: 8
  },
  {
    id: 'cenil-03',
    name: 'Cenil Pelangi Kenyal',
    category: 'pusaka',
    description: 'Cenil tepung tapioka olahan resep 1935 bertekstur kenyal pas, diwarnai ekstrak alami bunga telang & suji, disiram juruh aren kental legit.',
    portionDetails: '1 Porsi = 10 Potong Cenil Pelangi',
    price: 18000,
    rating: 4.8,
    reviewsCount: 215,
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80',
    ingredients: ['Tepung Tapioka Garut', 'Ekstrak Bunga Telang & Suji', 'Juruh Gula Aren Pekat', 'Kelapa Parut Gurih'],
    allergens: ['Bebas Gluten / Glukosa Organik'],
    isAvailable: true,
    stockRemaining: 80,
    preparationTimeMins: 5
  },
  {
    id: 'lupis-04',
    name: 'Lupis Ketan Daun Pisang',
    category: 'pusaka',
    description: 'Lupis ketan putih padat lembut yang dimasak berjam-jam dibungkus daun pisang kepok, disajikan dengan parutan kelapa gurih dan kucuran juruh gula aren kental.',
    portionDetails: '1 Porsi = 4 Segitiga Lupis Ketan',
    price: 18000,
    rating: 4.9,
    reviewsCount: 389,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
    ingredients: ['Beras Ketan Putih Super', 'Daun Pisang Kepok Alami', 'Kelapa Parut Fresh', 'Juruh Aren Murni'],
    allergens: ['Bebas Bahan Pengawet'],
    isAvailable: true,
    stockRemaining: 65,
    preparationTimeMins: 5
  },
  {
    id: 'paket-campur-05',
    name: 'Paket Campur Pusaka 4-in-1',
    category: 'paket_campur',
    description: 'Kombinasi favorit komplit perpaduan Puthu bambu, Klepon lumer, Cenil kenyal, dan Lupis ketan gurih dalam 1 porsi box beralas daun pisang.',
    portionDetails: '1 Porsi = 2 Puthu + 3 Klepon + 3 Cenil + 2 Lupis',
    price: 20000,
    rating: 5.0,
    reviewsCount: 610,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    ingredients: ['4 Varian Legendaris', 'Juruh Aren Ekstra', 'Kelapa Kukus Daun Pandan'],
    allergens: ['Bebas Pewarna Sintetis'],
    isAvailable: true,
    stockRemaining: 150,
    preparationTimeMins: 12
  },
  {
    id: 'besek-hampers-06',
    name: 'Box Besek Bambu Hampers Heritage',
    category: 'besek',
    description: 'Kemasan besek bambu tradisional ramah lingkungan isi 2 porsi campur komplit (total 20 pcs jajanan) + botol mini juruh gula aren murni.',
    portionDetails: 'Box Besek Bambu + Kendil Juruh Mini',
    price: 45000,
    rating: 5.0,
    reviewsCount: 185,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
    ingredients: ['2 Porsi Campur Komplit', 'Botol Juruh Aren Murni 100ml', 'Pita Besek Mataraman'],
    allergens: ['Ramah Lingkungan 100% Organik'],
    isAvailable: true,
    stockRemaining: 40,
    preparationTimeMins: 15
  }
];

// Initial Data Containers
export const users: User[] = [
  {
    id: 'user-demo-01',
    name: 'Budi Santoso',
    phone: '081234567890',
    passwordHash: 'password123',
    createdAt: new Date().toISOString()
  }
];

export const orders: Order[] = [
  {
    id: 'ORD-93501',
    userId: 'user-demo-01',
    customerName: 'Budi Santoso',
    customerPhone: '081234567890',
    items: [
      { menuId: 'paket-campur-05', name: 'Paket Campur Pusaka 4-in-1', quantity: 2, price: 20000, notes: 'Ekstra juruh aren' },
      { menuId: 'puthu-01', name: 'Puthu Tradisional Bambu', quantity: 1, price: 18000 }
    ],
    totalPrice: 58000,
    pickupType: 'SCHEDULED_PICKUP',
    pickupDate: '2026-09-30',
    pickupTimeSlot: '18:00 - 18:30 WIB',
    paymentMethod: 'QRIS',
    paymentStatus: 'PAID',
    kitchenStatus: 'STEAMING_BAMBOO',
    qrCodeToken: 'PUTHU-CELAKET-93501-VERIFIED',
    createdAt: new Date().toISOString()
  }
];

export const customEventOrders: CustomEventOrder[] = [];
