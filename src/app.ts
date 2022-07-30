import express from 'express';
import userRoutes from './routes/userroutes';
import productRoutes from './routes/productRoutes';
import orrderRoutes from './routes/orderRoutes';

const app = express();

app.use(express.json());
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orrderRoutes);

export default app;
