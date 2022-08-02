import functions from '../../database/functions.js';
import { handleStatusToggle } from '../../services/opportunities.services/handleStatusToggle.js';

/**
 *
 */

export const patchOpportunityStatus = async (req, res) => {
  const { user_email } = req.params;

  const opportunities = handleStatusToggle(req);

  const updated = await functions.update('opportunities', user_email, {
    opportunities,
  });

  return res.status(200).json(updated);
};
