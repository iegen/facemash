import express, { Request, Response } from 'express';
const router = express.Router();
router.get('/', (req: Request, res: Response, next) => {
  return res.json({ result: 'Hello World!asdf' });
});

export default router;
