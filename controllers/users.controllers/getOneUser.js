import functions from '../../database/functions.js';

export const getOneUser = async (req, res) => {
  const { key } = req.params;
  const user = await functions.getOne('users', key);
  const { opportunities } = await functions.getOne('opportunities', key);

  user.opportunities = opportunities;

  return res.status(200).json(user);
};
