import functions from '../../database/functions.js';

/**
 * Gets the user retrived by the VerifyUserEmail middleware
 * Retrieves user_email from the URL
 * Uses functions.getOne to retrive a the user's opportunities
 */

export const getOneUser = async (req, res) => {
  const { user } = req;
  const { user_email } = req.params;

  const { opportunities } = await functions.getOne('opportunities', user_email);

  return res.status(200).json({ user, opportunities });
};
