import { Router } from 'express';
import { patchOpportunityStatus } from '../../controllers/opportunities.controllers/patchOpportunityStatus.js';
import { verifyOpportunityName } from '../../middlewares/opportunities.middlewares/verifyOpportunityName.js';
import { verifyUserEmail } from '../../middlewares/users.middlewares/verifyUserEmail.js';

const opportunitiesRouter = Router();

opportunitiesRouter.patch(
  '/users/:user_email/opportunities/:opportunity_name',
  verifyUserEmail,
  verifyOpportunityName,
  patchOpportunityStatus
);

export default opportunitiesRouter;
