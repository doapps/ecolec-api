const knexnest = require('knexnest');
const { handleError } = require('../utils/helpers/expressHelper');

async function getInitialSetup(req, res) {
  const { db } = req.app;
  try {
    const industries = await db.select('id', 'name').from('industry');
    const regions = await knexnest(
      db.select('r.id AS _id', 'r.name AS _name', 'c.id AS _country__id', 'c.name AS _country__name')
        .from('region AS r')
        .leftJoin('country AS c', 'c.region_id', 'r.id'));
    return res.status(200).json({ industries, regions });
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

module.exports = {
  getInitialSetup,
};
