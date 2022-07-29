import express from 'express';
import userRoutes from './routes/userroutes';
import productRoutes from './routes/productRoutes';

const app = express();

app.use(express.json());
app.use('/products', productRoutes);
app.use('/users', userRoutes);

export default app;
