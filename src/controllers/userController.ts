import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

// Registrar um novo usuário
export const registerUser = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password, profile_image, bio } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        profile_image,
        bio,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: "Erro ao registrar usuário." });
  }
};

// Login de usuário
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(401).json({ error: "Credenciais inválidas." });
      return;
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
      expiresIn: '1h',
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: "Erro ao fazer login." });
  }
};

// Listar todos os usuários
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: "Erro ao buscar usuários." });
  }
};
