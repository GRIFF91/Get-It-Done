const router = require("express").Router();
const choreController = require('../../controllers/choreController');
const { catchErrors } = require('../../handlers/errorHandlers');

router.route('/create')
  .post(catchErrors(choreController.addChore));

router.route('/getAll')
  .get(catchErrors(choreController.getAll));


module.exports = router;