import functions from '../../database/functions.js';
import { toggleStatusByName } from '../../services/opportunities.services/toggleStatusByName.js';

/**
 * Gets the opportunities retrived by the findOpportunityName middleware
 * Retrieves user_email and opportunity_name from the URL
 * Calls the toggleStatusByName service to make the necessary changes
 * Uses functions.update to overwrite the user's opportunities
 * Returns the updated list
 */

export const patchOpportunityStatus = async (req, res) => {
  let { opportunities } = req;
  const { user_email } = req.params;
  const { opportunity_name } = req.params;

  opportunities = toggleStatusByName(opportunities, opportunity_name);

  const updated = await functions.update('opportunities', user_email, {
    opportunities,
  });

  return res.status(200).json(updated);
};
