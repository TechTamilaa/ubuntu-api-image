import { Request, Response } from 'express';
import Image from '../models/Image';

export async function uploadImage(req: Request, res: Response) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const imageUrl = `${req.protocol}://${req.get('host')}/${req.file.path}`;

    const image = await Image.create({ url: imageUrl });

    return res.status(201).json({ image });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
}
