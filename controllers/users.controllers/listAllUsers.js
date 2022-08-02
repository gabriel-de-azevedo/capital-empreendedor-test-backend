import functions from '../../database/functions.js';

/**
 * Tranforms the users object from the database into a list
 */

export const listAllUsers = async (_req, res) => {
  const users_object = await functions.getAll('users');

  const users = Object.values(users_object);

  return res.status(200).json({ users });
};
