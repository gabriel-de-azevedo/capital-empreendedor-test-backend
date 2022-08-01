import functions from '../../database/functions.js';

/**
 * Uses funtions.getAll to retrieve an object with all users
 * Transforms the users object in a list
 */

export const listAllUsers = async (_req, res) => {
  let users = await functions.getAll('users');

  users = Object.values(users);

  return res.status(200).json({ users });
};
