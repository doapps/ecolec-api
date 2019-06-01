const knexnest = require('knexnest');
const { handleError } = require('../utils/helpers/expressHelper');

async function getFiles(req, res) {
  const { db } = req.app;
  const { version } = req.body;

  try {
    const setting = await db.first('version').from('setting');
    const currentVersion = parseInt(setting.version, 10);

    if (version >= currentVersion) {
      return res.status(200).json({ message: 'No hay actualizaciones disponibles' });
    }

    const regions = await db.select('id', 'name').from('region');
    const countries = await db.select('id', 'name', 'region_id AS regionId').from('country');

    const clients = await db.select('id', 'name').from('media');
    const industries = await db.select('id', 'name').from('industry');

    const projects = await knexnest(
      db.select(
        'p.id AS _id',
        'p.name AS _name',
        'p.latitude AS _latitude',
        'p.longitude AS _longitude',
        'p.description AS _description',
        'p.object_name AS _objectName',
        'p.object_url AS _objectUrl',
        'p.pdf_name AS _pdfName',
        'p.client_id AS _clientId',
        'p.country_id AS _countryId',
        'p.industry_id AS _industryId',
        't.id AS _texture__id',
        't.url AS _texture__url',
      )
        .from('project AS p')
        .leftJoin('texture AS t', 't.project_id', 'p.id'));

    const equipments = await db.select('id', 'name').from('equipment');
    const models = await db.select('id', 'name', 'equipment_id AS equipmentId').from('model');

    const media = await db.select('id', 'name', 'type', 'url', 'model_id AS modelId').from('media');
    const project_model = await db.select('id', 'project_id AS projectId', 'model_id AS modelId').from('project_model');

    return res.status(200).json({
      regions, countries, clients, industries, equipments, models, media, project_model, projects,
    });
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

module.exports = {
  getFiles,
};
