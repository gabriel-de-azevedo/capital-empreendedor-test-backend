import functions from '../../database/functions.js';

export const verifyOpportunityName = async (req, res, next) => {
  const { opportunity_name } = req.params;
  const { user_email } = req.params;
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
