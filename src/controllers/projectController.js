const { handleError } = require('../utils/helpers/expressHelper');

async function getAttendanceByMonth(req, res) {
  const { db } = req.app;
  const { month, year } = req.body;
  const { id } = req.params;

  try {
    const attendances = await db.select('check_in', 'check_out', 'status', 'has_justification').from('attendance')
      .whereRaw(`YEAR(register_date) = ${year}`)
      .whereRaw(`MONTH(register_date) = ${month}`)
      .whereRaw(`employee_id = ${id}`);

    if (attendances.length === 0) {
      return res.status(400).json({ message: 'Este usuario no tiene asistencias en el mes seleccionado' });
    }
    return res.status(200).json(attendances);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

async function getProjects(req, res) {
  try {

  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

module.exports = {
  getInitialSetup,
};
