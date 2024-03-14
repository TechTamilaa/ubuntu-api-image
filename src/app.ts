import express from 'express';
import { connectDatabase } from './database';
import imageRoutes from './routes/imageRoutes';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/images', imageRoutes);
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectDatabase();
});
