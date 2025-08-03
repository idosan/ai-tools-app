// src/controllers/auth.ts
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const login = (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'admin') {
    const token = jwt.sign({ username }, process.env.JWT_SECRET as string, {
      expiresIn: '1h',
    });
    return res.json({ token });
  }

  console.warn(`Login failed for user: ${username}`);
  return res.status(401).json({ message: 'Invalid credentials' });
};
