import functions from '../../database/functions.js';

export const patchOpportunityStatus = async (req, res) => {
  const { user_email, opportunity_name } = req.params;
  const { opportunities } = req;

  opportunities.map((opp) => {
    if (opp.name == opportunity_name) {
      opp.isActive = !opp.isActive;
    }
  });

  const updated = await functions.update('opportunities', user_email, {
    opportunities,
  });

  return res.status(200).json(updated);
};
