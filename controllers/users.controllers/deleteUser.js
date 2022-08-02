import functions from '../../database/functions.js';

/**
 * Uses the user_email on the URL to delete a user and his opportunities
 */

export const deleteUser = async (req, res) => {
  const { user_email } = req.params;

  await functions.delete('users', user_email);
  await functions.delete('opportunities', user_email);

  return res.status(204).json();
};
