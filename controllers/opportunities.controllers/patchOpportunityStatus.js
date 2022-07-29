import functions from '../../database/functions.js';
import { toggleStatusByName } from '../../services/opportunities.services/toggleStatusByName.js';

export const patchOpportunityStatus = async (req, res) => {
  const { user_email } = req.params;

  const opportunities = toggleStatusByName(req);

  const updated = await functions.update('opportunities', user_email, {
    opportunities,
  });

  return res.status(200).json(updated);
};
