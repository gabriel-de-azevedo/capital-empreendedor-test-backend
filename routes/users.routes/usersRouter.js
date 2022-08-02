import { Router } from 'express';
import { addUser } from '../../controllers/users.controllers/addUser.js';
import { deleteUser } from '../../controllers/users.controllers/deleteUser.js';
import { getOneUser } from '../../controllers/users.controllers/getOneUser.js';
import { listAllUsers } from '../../controllers/users.controllers/listAllUsers.js';
import { validateSchema } from '../../middlewares/general.middlewares/validateSchema.js';
import { findUserEmail } from '../../middlewares/users.middlewares/findUserEmail.js';
import { validateUserEmail } from '../../middlewares/users.middlewares/validateUserEmail.js';
import { userSchema } from '../../models/users.models/userSchema.js';

/**
 * Adds all controller and middlewares to the users routes
 */

const usersRouter = Router();

usersRouter.post('', validateSchema(userSchema), validateUserEmail, addUser);

usersRouter.get('', listAllUsers);

usersRouter.get('/:user_email', findUserEmail, getOneUser);

usersRouter.delete('/:user_email', findUserEmail, deleteUser);

export default usersRouter;
