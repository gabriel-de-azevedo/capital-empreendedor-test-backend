import functions from '../../database/functions.js';

export const getOneUser = async (req, res) => {
  const { user_id } = req.params;
  const { user } = req;
  const { opportunities } = await functions.getOne('opportunities', user_id);

  user.opportunities = opportunities;

  return res.status(200).json(user);
};
