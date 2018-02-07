const router = require("express").Router();
const choreController = require('../../controllers/choreController');
const { catchErrors } = require('../../handlers/errorHandlers');

router.route('/create')
  .post(catchErrors(choreController.addChore));


module.exports = router;