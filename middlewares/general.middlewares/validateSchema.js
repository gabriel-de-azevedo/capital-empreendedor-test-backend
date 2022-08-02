export const validateSchema = (schema) => async (req, res, next) => {
  try {
    req.body = await schema.validate(req.body);
  } catch (e) {
    const { errors } = e;
    return res.status(400).json({ errors });
  }

  return next();
};
