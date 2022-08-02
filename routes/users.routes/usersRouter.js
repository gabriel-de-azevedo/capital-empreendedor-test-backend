import { Router } from 'express';
import { createUser } from '../../controllers/users.controllers/createUser.js';
import { getOneUser } from '../../controllers/users.controllers/getOneUser.js';
import { listAllUsers } from '../../controllers/users.controllers/listAllUsers.js';
import { validateSchema } from '../../middlewares/general.middlewares/validateSchema.js';
import { findUserEmail } from '../../middlewares/users.middlewares/findUserEmail.js';
import { userSchema } from '../../models/users.models/userSchema.js';

/**
 * Defines the listAllUsers controller to the first route
 * Defines the getOneUser controller to the second
 * Adds the findUserEmail middleware to it
 */

const usersRouter = Router();

usersRouter.get('', listAllUsers);

usersRouter.get('/:user_email', findUserEmail, getOneUser);

usersRouter.post('', validateSchema(userSchema), createUser);

export default usersRouter;
