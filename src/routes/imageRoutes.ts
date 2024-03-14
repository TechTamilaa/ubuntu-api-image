import express from 'express';
import { uploadImage } from '../controllers/imageController';
import multer from 'multer';
import { exec } from 'child_process';

const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      const uploadDirectory = 'ubuntu@13.200.229.149:/home/ubuntu/uploads'; 
      exec(`ssh ubuntu@13.200.229.149 'mkdir -p /home/ubuntu/uploads'`, (error) => {
        if (error) {
          console.error('Error creating upload directory:', error);
        }

        cb(null, uploadDirectory);
      });
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

router.post('/upload', upload.single('image'), uploadImage);
export default router;
