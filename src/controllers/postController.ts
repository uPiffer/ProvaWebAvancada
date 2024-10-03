import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// Criar um novo post
export const createPost = async (req: Request, res: Response) => {
  const { user_id, content, image_url } = req.body;
  try {
    const post = await prisma.post.create({
      data: {
        user_id,
        content,
        image_url,
      },
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar post." });
  }
};

// Listar todos os posts
export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany();
    res.json(posts);
  } catch (error) {
    res.status(400).json({ error: "Erro ao buscar posts." });
  }
};
