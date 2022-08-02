import { Router } from 'express';
import { addOpportunity } from '../../controllers/opportunities.controllers/addOpportunity.js';
import { patchOpportunityStatus } from '../../controllers/opportunities.controllers/patchOpportunityStatus.js';
import { validateSchema } from '../../middlewares/general.middlewares/validateSchema.js';
import { findOpportunityName } from '../../middlewares/opportunities.middlewares/findOpportunityName.js';
import { validateOpportunityName } from '../../middlewares/opportunities.middlewares/validateOpportunityName.js';
import { findUserEmail } from '../../middlewares/users.middlewares/findUserEmail.js';
import { opportunitySchema } from '../../models/opportunities.models/opportunitySchema.js';

/**
 *
 */

const opportunitiesRouter = Router();

opportunitiesRouter.post(
  '/:user_email/opportunities/',
  validateSchema(opportunitySchema),
  validateOpportunityName,
  addOpportunity
);

opportunitiesRouter.patch(
  '/:user_email/opportunities/:opportunity_name',
  findUserEmail,
  findOpportunityName,
  patchOpportunityStatus
);

export default opportunitiesRouter;
