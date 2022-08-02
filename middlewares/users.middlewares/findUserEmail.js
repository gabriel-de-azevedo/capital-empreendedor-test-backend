import functions from '../../database/functions.js';

/**
 * Retrieves user_email from the URL
 * Uses functions.getOne to retrive a single user
 * Verifies if an user was found, returning an error if not
 * Stores the user on the request object
 */

export const findUserEmail = async (req, res, next) => {
  const { user_email } = req.params;
  const user = await functions.getOne('users', user_email);

  if (!user) {
    return res.status(404).json({ message: 'user not found' });
  }

  req.user = user;

  return next();
};
