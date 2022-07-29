import { Router } from 'express';

const userRouter = Router();

userRouter.get('/users', (req, res, next) => res.send({ users: 'GET' }));

userRouter.get('/users/:key', (req, res, next) => {
  const { key } = req.params;

  return res.send({ users: `GET ${key}` });
});

export default userRouter;
