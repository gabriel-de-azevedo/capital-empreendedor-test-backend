import express from 'express';
import usersRouter from './users.routes/usersRouter.js';
import opportunitiesRouter from './opportunities.routes/opportunitiesRouter.js';

/**
 * Adds all routes to the main indexRouter
 */

export const indexRouter = express.Router();

indexRouter.use('/users', usersRouter);
usersRouter.use(opportunitiesRouter);
