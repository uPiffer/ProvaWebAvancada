import { Router } from 'express';
import { createPost, getAllPosts } from '../controllers/postController';

const router = Router();

router.post('/', createPost);
router.get('/', getAllPosts);

export default router;
