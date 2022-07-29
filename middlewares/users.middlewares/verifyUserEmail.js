import functions from '../../database/functions.js';

export const verifyUserEmail = async (req, res, next) => {
  const { user_email } = req.params;
  const user = await functions.getOne('users', user_email);

  if (!user) {
    return res.status(404).json({ message: 'user not found' });
  }

  req.user = user;

  return next();
};
