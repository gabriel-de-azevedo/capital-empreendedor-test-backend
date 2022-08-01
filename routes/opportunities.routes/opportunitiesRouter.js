import { Router } from 'express';
import { patchOpportunityStatus } from '../../controllers/opportunities.controllers/patchOpportunityStatus.js';
import { verifyOpportunityName } from '../../middlewares/opportunities.middlewares/verifyOpportunityName.js';
import { verifyUserEmail } from '../../middlewares/users.middlewares/verifyUserEmail.js';

/**
 * Defines the patchOpportunityStatus controller to the route
 * Adds the verifyUserEmail middleware to it
 * Also adds the verifyOpportunityName middleware to it
 */

const opportunitiesRouter = Router();

opportunitiesRouter.patch(
  '/:user_email/opportunities/:opportunity_name',
  verifyUserEmail,
  verifyOpportunityName,
  patchOpportunityStatus
);

export default opportunitiesRouter;
