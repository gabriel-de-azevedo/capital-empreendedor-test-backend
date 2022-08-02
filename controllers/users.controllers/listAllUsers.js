import functions from '../../database/functions.js';

/**
 * Tranforms the users object from the database into a list
 */

export const listAllUsers = async (_req, res) => {
  let users = await functions.getAll('users');

  users = Object.values(users);

  return res.status(200).json({ users });
};
