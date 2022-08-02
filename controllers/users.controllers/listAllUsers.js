import functions from '../../database/functions.js';

/**
 *
 */

export const listAllUsers = async (_req, res) => {
  let users = await functions.getAll('users');

  users = Object.values(users);

  return res.status(200).json({ users });
};
