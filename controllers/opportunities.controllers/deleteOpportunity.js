import functions from '../../database/functions.js';
import { handleDelete } from '../../services/opportunities.services/handleDelete.js';

/**
 * Deletes target_opportunity trough the handleDelete service
 * Uses the user_email on the URL to update it's opportunities on the database
 */

export const deleteOpportunity = async (req, res) => {
  const { user_email } = req.params;

  const opportunities = handleDelete(req);

  await functions.update('opportunities', user_email, {
    opportunities,
  });

  return res.status(204).json();
};
