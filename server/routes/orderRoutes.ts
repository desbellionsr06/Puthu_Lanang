import { Router } from 'express';
import { getOrders, createOrder, updateOrderStatus, getOrderById } from '../controllers/orderController';

const router = Router();

// Order Endpoints
router.get('/', getOrders);
router.post('/', createOrder);
router.patch('/:id/status', updateOrderStatus);
router.get('/:id', getOrderById);

export default router;
