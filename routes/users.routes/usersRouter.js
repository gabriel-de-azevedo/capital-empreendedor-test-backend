import { Router } from 'express';
import { addUser } from '../../controllers/users.controllers/addUser.js';
import { getOneUser } from '../../controllers/users.controllers/getOneUser.js';
import { listAllUsers } from '../../controllers/users.controllers/listAllUsers.js';
import { validateSchema } from '../../middlewares/general.middlewares/validateSchema.js';
import { findUserEmail } from '../../middlewares/users.middlewares/findUserEmail.js';
import { validateUserEmail } from '../../middlewares/users.middlewares/validateUserEmail.js';
import { userSchema } from '../../models/users.models/userSchema.js';

/**
 * Defines the listAllUsers controller to the first get route
 * Defines the getOneUser controller to the second
 * Adds the findUserEmail middleware to it
 * Defines the addUser controller to the post route
 * Adds the validateSchema middleware to it
 * Adds the validateUserEmail middleware to it
 */

const usersRouter = Router();

usersRouter.get('', listAllUsers);

usersRouter.get('/:user_email', findUserEmail, getOneUser);

usersRouter.post('', validateSchema(userSchema), validateUserEmail, addUser);

export default usersRouter;
