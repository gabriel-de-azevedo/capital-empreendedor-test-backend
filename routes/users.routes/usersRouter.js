import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/users', (req, res, next) => res.send({ users: 'GET' }));

usersRouter.get('/users/:key', (req, res, next) => {
  const { key } = req.params;

  return res.send({ users: `GET ${key}` });
});

export default usersRouter;
