/**
 * Removes target_opportunity from all_opportunities
 */

export const handleDelete = (req) => {
  let { all_opportunities, target_opportunity } = req;

  const index = all_opportunities.indexOf(target_opportunity);

  all_opportunities.splice(index, 1);

  return all_opportunities;
};
