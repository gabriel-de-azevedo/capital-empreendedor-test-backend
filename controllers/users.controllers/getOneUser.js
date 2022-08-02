import functions from '../../database/functions.js';

/**
 * Uses the user_email on the URL to find it's user's opportunities
 * Returns target_user and his opportunities
 */

export const getOneUser = async (req, res) => {
  const { target_user } = req;
  const { user_email } = req.params;

  const { opportunities } = await functions.getOne('opportunities', user_email);

  return res.status(200).json({ user: target_user, opportunities });
};
