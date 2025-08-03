import { Request, Response } from 'express';
import { db } from '../db';

export const getAiTools = async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query('SELECT * FROM ai_tools');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching AI tools:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
