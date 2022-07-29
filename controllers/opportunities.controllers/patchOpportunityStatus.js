export const patchOpportunityStatus = async (req, res) => {
  const { opportunities } = req;

  return res.status(200).json(opportunities);
};
