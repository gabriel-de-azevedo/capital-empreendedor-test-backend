import functions from '../../database/functions.js';

/**
 * Checks if the email on the request body is already in use
 */

export const validateUserEmail = async (req, res, next) => {
  const { email } = req.body;
  const user = await functions.getOne('users', email);

  if (user) {
    return res.status(409).json({ errors: ['email already in use'] });
  }

  return next();
};
