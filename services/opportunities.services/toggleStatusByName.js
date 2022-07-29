export const toggleStatusByName = (req) => {
  const { opportunity_name } = req.params;
  const { opportunities } = req;

  opportunities.map((opp) => {
    if (opp.name == opportunity_name) {
      opp.isActive = !opp.isActive;
    }
  });

  return opportunities;
};
