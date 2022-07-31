import functions from '../../database/functions.js';

export const getOneUser = async (req, res) => {
  const { user_email } = req.params;
  const { user } = req;

  const { opportunities } = await functions.getOne('opportunities', user_email);

  return res.status(200).json({ user, opportunities });
};
