import functions from '../../database/functions.js';

/**
 *  Uses the opportunity_name on the URL to find target_opportunity
 */

export const findOpportunityName = async (req, res, next) => {
  const { user_email, opportunity_name } = req.params;
  const { opportunities } = await functions.getOne('opportunities', user_email);

  let found;
  opportunities.forEach((opp) => {
    if (opp.name === opportunity_name) {
      found = opp;
    }
  });

  if (!found) {
    return res.status(404).json({ errors: ['opportunity not found'] });
  }

  req.target_opportunity = found;
  req.all_opportunities = opportunities;

  return next();
};
