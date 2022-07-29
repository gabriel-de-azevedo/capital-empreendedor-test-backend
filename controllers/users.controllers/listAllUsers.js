import functions from '../../database/functions.js';

export const listAllUsers = async (_req, res) => {
  const users = await functions.getAll('users');
  console.log(users);
  return res.status(200).json(users);
};
