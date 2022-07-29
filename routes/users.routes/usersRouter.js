import { Router } from 'express';
import { listAllUsers } from '../../controllers/users.controllers/listAllUsers.js';

const usersRouter = Router();

usersRouter.get('/users', listAllUsers);

usersRouter.get('/users/:key', (req, res, next) => {
  const { key } = req.params;

  return res.send({ users: `GET ${key}` });
});

export default usersRouter;
