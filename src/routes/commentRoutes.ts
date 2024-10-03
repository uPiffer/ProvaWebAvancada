import { Router } from 'express';
import { createComment, getCommentsByPost } from '../controllers/commentController';

const router = Router();

router.post('/', createComment);
router.get('/:post_id', getCommentsByPost);

export default router;
