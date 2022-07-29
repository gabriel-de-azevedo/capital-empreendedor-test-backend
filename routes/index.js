import express from 'express';
import usersRouter from './users.routes/usersRouter.js';
import opportunitiesRouter from './opportunities.routes/opportunitiesRouter.js';

var router = express.Router();

router.use('/users', usersRouter);
usersRouter.use(opportunitiesRouter);

export default router;
