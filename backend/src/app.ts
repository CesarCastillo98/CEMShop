import express from "express";
import cors from 'cors';
import productosRoutes from './routes/productosRoutes';
import userRoutes from './routes/userRouter';

const app = express();

app.use(cors());
// Aumentar el límite a 10mb
app.use(express.json({ limit: '10mb' }));

app.use('/api/productos', productosRoutes);
app.use('/api/users', userRoutes);

export default app;