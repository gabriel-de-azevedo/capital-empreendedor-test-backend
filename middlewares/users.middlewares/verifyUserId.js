import functions from '../../database/functions.js';

export const verifyUserId = async (req, res, next) => {
  const { user_id } = req.params;
  const user = await functions.getOne('users', user_id);

  if (!user) {
    return res.status(404).json({ message: 'user not found' });
  }

  req.user = user;

  return next();
};
