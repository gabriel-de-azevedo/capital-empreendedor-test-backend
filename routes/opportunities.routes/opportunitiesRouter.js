import { Router } from 'express';

const opportunitiesRouter = Router();

opportunitiesRouter.patch('/opportunities/:key', (req, res, next) => {
  const { key } = req.params;

  return res.send({ opportunities: `PATCH ${key}` });
});

export default opportunitiesRouter;
