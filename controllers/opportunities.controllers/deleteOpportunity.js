import functions from '../../database/functions.js';
import { handleDelete } from '../../services/opportunities.services/handleDelete.js';

/**
 *
 */

export const deleteOpportunity = async (req, res) => {
  const { user_email } = req.params;

  const opportunities = handleDelete(req);

  await functions.update('opportunities', user_email, {
    opportunities,
  });

  return res.status(204).json();
};
