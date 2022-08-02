import functions from '../../database/functions.js';

/**
 * Adds the user on the request body to the database
 */

export const addUser = async (req, res) => {
  const { body } = req;

  const user = await functions.set('users', body.email, body);
  await functions.set('opportunities', body.email, { opportunities: [] });

  return res.status(201).json({ user });
};
