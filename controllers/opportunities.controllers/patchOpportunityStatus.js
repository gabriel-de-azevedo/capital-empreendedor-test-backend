import functions from '../../database/functions.js';
import { handleStatusToggle } from '../../services/opportunities.services/handleStatusToggle.js';

/**
 * Toggles target_opportunity's status trough the handleStatusToggle service
 * Uses the user_email on the URL to update it's opportunities on the database
 */

export const patchOpportunityStatus = async (req, res) => {
  const { user_email } = req.params;

  const opportunities = handleStatusToggle(req);

  await functions.update('opportunities', user_email, {
    opportunities,
  });

  return res.status(200).json({ opportunities });
};
