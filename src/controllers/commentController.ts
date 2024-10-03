import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// Criar um novo comentário
export const createComment = async (req: Request, res: Response) => {
  const { post_id, user_id, content } = req.body;
  try {
    const comment = await prisma.comment.create({
      data: {
        post_id,
        user_id,
        content,
      },
    });
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: "Erro ao criar comentário." });
  }
};

// Listar todos os comentários de um post
export const getCommentsByPost = async (req: Request, res: Response) => {
  const { post_id } = req.params;
  try {
    const comments = await prisma.comment.findMany({
      where: { post_id: Number(post_id) },
    });
    res.json(comments);
  } catch (error) {
    res.status(400).json({ error: "Erro ao buscar comentários." });
  }
};
