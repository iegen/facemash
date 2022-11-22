import express from 'express';
import helloWorld from './hello-world.routes';

const router = express.Router();
router.use(`/hello-world`, helloWorld);

export default router;
