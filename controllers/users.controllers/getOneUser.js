import functions from '../../database/functions.js';

/**
 *
 */

export const getOneUser = async (req, res) => {
  const { target_user } = req;
  const { user_email } = req.params;

  const { opportunities } = await functions.getOne('opportunities', user_email);

  return res.status(200).json({ user: target_user, opportunities });
};
