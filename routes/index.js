import express from 'express';
import userRouter from './users.routes/usersRouter.js';
import opportunitiesRouter from './opportunities.routes/opportunitiesRouter.js';

var router = express.Router();

router.use(userRouter);
router.use(opportunitiesRouter);

export default router;
