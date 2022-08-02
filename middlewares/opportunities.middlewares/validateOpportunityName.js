import functions from '../../database/functions.js';

/**
 * Checks if the name on the request body is already in use
 */

export const validateOpportunityName = async (req, res, next) => {
  const { user_email } = req.params;
  const { name } = req.body;
  const { opportunities } = await functions.getOne('opportunities', user_email);

  let found;
  opportunities.forEach((opp) => {
    if (opp.name === name) {
      found = opp;
    }
  });

  if (found) {
    return res.status(409).json({ errors: ['name already in use'] });
  }

  return next();
};
