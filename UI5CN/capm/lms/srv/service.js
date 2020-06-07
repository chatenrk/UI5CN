const cds = require('@sap/cds');
const { Students } = cds.entities('myCompany.hr.lms');
module.exports = (srv) => {
  srv.on('READ', 'Students', async (req, res) => {
    const { SELECT } = cds.ql(req);
    const aFilter = req.query.SELECT.where;
    if (typeof aFilter === 'undefined') {
      return await SELECT.from(Students);
    }

    const result = await SELECT.from(Students).where({
      email: aFilter[2].val,
    });
    return result;
  });
};
