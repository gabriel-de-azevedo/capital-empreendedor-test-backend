import functions from '../../database/functions.js';

/**
 *
 */

export const findUserEmail = async (req, res, next) => {
  const { user_email } = req.params;
  const user = await functions.getOne('users', user_email);

  if (!user) {
    return res.status(404).json({ errors: ['user not found'] });
  }

  req.target_user = user;

  return next();
};
