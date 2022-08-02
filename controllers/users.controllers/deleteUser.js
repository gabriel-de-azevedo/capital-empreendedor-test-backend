import functions from '../../database/functions.js';

/**
 *
 */

export const deleteUser = async (req, res) => {
  const { user_email } = req.params;

  await functions.delete('users', user_email);
  await functions.delete('opportunities', user_email);

  return res.status(204).json();
};
