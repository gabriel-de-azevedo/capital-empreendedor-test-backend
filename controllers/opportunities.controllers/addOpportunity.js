import functions from '../../database/functions.js';

/**
 *
 */

export const addOpportunity = async (req, res) => {
  const { body } = req;
  const { user_email } = req.params;

  const { opportunities } = await functions.getOne('opportunities', user_email);

  opportunities.push(body);

  const updated = await functions.update('opportunities', user_email, {
    opportunities,
  });

  return res.status(201).json({ opportunities });
};
