import { Router } from 'express';
import { getOneUser } from '../../controllers/users.controllers/getOneUser.js';
import { listAllUsers } from '../../controllers/users.controllers/listAllUsers.js';

const usersRouter = Router();

usersRouter.get('/users', listAllUsers);

usersRouter.get('/users/:key', getOneUser);

export default usersRouter;
