import functions from '../../database/functions.js';

/**
 * Retrieves user_email and opportunity_name from the URL
 * Uses functions.getOne to retrive a the user's opportunities
 * Creates a list with the name of all opportunities
 * Verifies if opportunity_name is in the list, returning an error if not
 * Stores the user's opportunities on the request object
 */

export const verifyOpportunityName = async (req, res, next) => {
  const { user_email, opportunity_name } = req.params;
  const { opportunities } = await functions.getOne('opportunities', user_email);

  let opportunityNames = [];
  opportunities.forEach((opp) => {
    opportunityNames.push(opp.name);
  });

  if (!opportunityNames.includes(opportunity_name)) {
    return res.status(404).json({ message: 'opportunity not found' });
  }

  req.opportunities = opportunities;

  return next();
};
