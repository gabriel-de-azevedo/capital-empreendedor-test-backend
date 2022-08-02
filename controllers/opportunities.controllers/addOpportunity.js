import functions from '../../database/functions.js';

/**
 * Adds the opportunity on the request body to the database
 */

export const addOpportunity = async (req, res) => {
  const { body } = req;
  const { user_email } = req.params;

  const { opportunities } = await functions.getOne('opportunities', user_email);

  opportunities.push(body);

  await functions.update('opportunities', user_email, {
    opportunities,
  });

  return res.status(201).json({ opportunities });
};
