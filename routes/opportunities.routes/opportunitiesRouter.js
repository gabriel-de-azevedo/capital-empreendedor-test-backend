import { Router } from 'express';
import { patchOpportunityStatus } from '../../controllers/opportunities.controllers/patchOpportunityStatus.js';
import { findOpportunityName } from '../../middlewares/opportunities.middlewares/findOpportunityName.js';
import { findUserEmail } from '../../middlewares/users.middlewares/findUserEmail.js';

/**
 * Defines the patchOpportunityStatus controller to the route
 * Adds the findUserEmail middleware to it
 * Also adds the findOpportunityName middleware to it
 */

const opportunitiesRouter = Router();

opportunitiesRouter.patch(
  '/:user_email/opportunities/:opportunity_name',
  findUserEmail,
  findOpportunityName,
  patchOpportunityStatus
);

export default opportunitiesRouter;
