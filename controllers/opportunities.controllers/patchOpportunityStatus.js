import functions from '../../database/functions.js';
import { toggleStatusByName } from '../../services/opportunities.services/toggleStatusByName.js';

export const patchOpportunityStatus = async (req, res) => {
  const { opportunity_name } = req.params;
  let { opportunities } = req;
  const { user_email } = req.params;

  opportunities = toggleStatusByName(opportunities, opportunity_name);

  const updated = await functions.update('opportunities', user_email, {
    opportunities,
  });

  return res.status(200).json(updated);
};
