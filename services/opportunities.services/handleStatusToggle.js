/**
 * Toggles the isActive property from the target_opportunity
 * Returns an updated list with all_opportunities
 */

export const handleStatusToggle = (req) => {
  let { all_opportunities, target_opportunity } = req;

  const index = all_opportunities.indexOf(target_opportunity);

  target_opportunity.isActive = !target_opportunity.isActive;

  all_opportunities[index] = target_opportunity;

  return all_opportunities;
};
