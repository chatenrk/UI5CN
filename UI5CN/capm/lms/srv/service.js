const cds = require('@sap/cds');
const { Students } = cds.entities('myCompany.hr.lms');
module.exports = (srv) => {
  srv.on('READ', 'Students', async (req, res) => {
    const { SELECT } = cds.ql(req);
    const result = SELECT.from(Students);
    return result;
  });
};
