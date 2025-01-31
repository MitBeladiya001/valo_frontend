// pages/api/upload-video.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { nextConnect } from 'next-connect';
import multer, { File } from 'multer';

// Define the type for the request with the file
interface NextApiRequestWithFile extends NextApiRequest {
  file: File;
}

// Set up multer storage (in-memory storage or disk storage)
const upload = multer({
  storage: multer.memoryStorage(), // Use memory storage (you can change this to disk storage if needed)
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB size limit
  },
});

// Initialize next-connect
const handler = nextConnect<NextApiRequestWithFile, NextApiResponse>();

// Use multer middleware to handle file uploads
handler.use(upload.single('video')); // 'video' is the field name in the FormData

// Handle the POST request
handler.post((req: NextApiRequestWithFile, res: NextApiResponse) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  // Here, the video file is available as req.file (in memory)
  // You can process it further, for example, forward it to a cloud service like S3
  console.log('Video file received:', req.file.originalname);

  // For now, let's send a success response
  res.status(200).json({ message: 'Video uploaded successfully' });
});

export default handler;

// To handle the file type, you might need to extend the multer.File type
declare module 'multer' {
  interface File {
    originalname: string;
  }
}