/**
 * Receives a list of opportunities and the name of the one to alter
 * Loops trough the list and toggles it's status
 */

export const toggleStatusByName = (opportunities, opportunity_name) => {
  opportunities.map((opp) => {
    if (opp.name == opportunity_name) {
      opp.isActive = !opp.isActive;
    }
  });

  return opportunities;
};
