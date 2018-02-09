const router = require("express").Router();
const poolController = require('../../controllers/poolController');
const { catchErrors } = require('../../handlers/errorHandlers');

router.route('/create')
  .post(catchErrors(poolController.createPool));

router.route('/getPools')
  .get(catchErrors(poolController.getPools));

router.route('/:id')


module.exports = router;