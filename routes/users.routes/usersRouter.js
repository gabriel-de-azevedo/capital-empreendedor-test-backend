import { Router } from 'express';
import { getOneUser } from '../../controllers/users.controllers/getOneUser.js';
import { listAllUsers } from '../../controllers/users.controllers/listAllUsers.js';
import { verifyUserEmail } from '../../middlewares/users.middlewares/verifyUserEmail.js';

const usersRouter = Router();

usersRouter.get('/users', listAllUsers);

usersRouter.get('/users/:user_email', verifyUserEmail, getOneUser);

export default usersRouter;
