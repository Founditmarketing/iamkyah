import { put } from '@vercel/blob';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const password = req.headers['x-admin-password'];
  if (password !== 'Iamkyahadmin2026') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const filename = req.query.filename;
    if (!filename) {
      return res.status(400).json({ error: 'Filename is required in query params' });
    }

    const blob = await put(filename, req, {
      access: 'public',
    });

    return res.status(200).json(blob);
  } catch (error) {
    console.error('Error uploading blob:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
