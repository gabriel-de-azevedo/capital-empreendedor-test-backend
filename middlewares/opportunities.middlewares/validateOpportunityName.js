import functions from '../../database/functions.js';

/**
 *
 */

export const validateOpportunityName = async (req, res, next) => {
  const { user_email } = req.params;
  const { name } = req.body;
  const { opportunities } = await functions.getOne('opportunities', user_email);

  let opportunityNames = [];
  opportunities.forEach((opp) => {
    opportunityNames.push(opp.name);
  });

  if (opportunityNames.includes(name)) {
    return res.status(409).json({ errors: ['name already in use'] });
  }

  return next();
};
