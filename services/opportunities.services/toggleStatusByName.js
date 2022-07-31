export const toggleStatusByName = (opportunities, opportunity_name) => {
  opportunities.map((opp) => {
    if (opp.name == opportunity_name) {
      opp.isActive = !opp.isActive;
    }
  });

  return opportunities;
};
