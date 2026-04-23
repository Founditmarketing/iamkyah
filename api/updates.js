import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Create table if it doesn't exist
      await sql`
        CREATE TABLE IF NOT EXISTS updates (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          description TEXT,
          event_date TIMESTAMP,
          image_url VARCHAR(255),
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `;

      const { rows } = await sql`SELECT * FROM updates ORDER BY event_date ASC NULLS LAST, created_at DESC;`;
      return res.status(200).json(rows);
    } catch (error) {
      console.error('Error fetching updates:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Require admin password for POST and DELETE
  const password = req.headers['x-admin-password'] || req.body?.password;
  if (password !== 'Iamkyahadmin2026') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'POST') {
    try {
      const { title, description, event_date, image_url } = req.body;
      if (!title) {
        return res.status(400).json({ error: 'Title is required' });
      }

      await sql`
        INSERT INTO updates (title, description, event_date, image_url)
        VALUES (${title}, ${description}, ${event_date || null}, ${image_url || null});
      `;
      return res.status(201).json({ message: 'Update created successfully' });
    } catch (error) {
      console.error('Error creating update:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const { id } = req.query;
      if (!id) {
        return res.status(400).json({ error: 'ID is required' });
      }

      await sql`DELETE FROM updates WHERE id = ${id};`;
      return res.status(200).json({ message: 'Update deleted successfully' });
    } catch (error) {
      console.error('Error deleting update:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
