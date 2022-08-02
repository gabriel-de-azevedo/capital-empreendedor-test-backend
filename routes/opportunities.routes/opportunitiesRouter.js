import { Router } from 'express';
import { addOpportunity } from '../../controllers/opportunities.controllers/addOpportunity.js';
import { patchOpportunityStatus } from '../../controllers/opportunities.controllers/patchOpportunityStatus.js';
import { validateSchema } from '../../middlewares/general.middlewares/validateSchema.js';
import { findOpportunityName } from '../../middlewares/opportunities.middlewares/findOpportunityName.js';
import { validateOpportunityName } from '../../middlewares/opportunities.middlewares/validateOpportunityName.js';
import { findUserEmail } from '../../middlewares/users.middlewares/findUserEmail.js';
import { opportunitySchema } from '../../models/opportunities.models/opportunitySchema.js';

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

opportunitiesRouter.post(
  '/:user_email/opportunities/',
  validateSchema(opportunitySchema),
  validateOpportunityName,
  addOpportunity
);

export default opportunitiesRouter;
