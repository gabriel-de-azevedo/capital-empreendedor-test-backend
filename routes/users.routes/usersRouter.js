import { Router } from 'express';
import { getOneUser } from '../../controllers/users.controllers/getOneUser.js';
import { listAllUsers } from '../../controllers/users.controllers/listAllUsers.js';
import { verifyUserId } from '../../middlewares/users.middlewares/verifyUserId.js';

const usersRouter = Router();

usersRouter.get('/users', listAllUsers);

usersRouter.get('/users/:user_id', verifyUserId, getOneUser);

export default usersRouter;
