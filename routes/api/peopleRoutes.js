const router = require("express").Router();
const peopleController = require('../../controllers/peopleController');
const { catchErrors } = require('../../handlers/errorHandlers');

// Matches with "/api/people"

router.route("/pool-managers")
  // .get(catchErrors(articleController.findAll))
  .post(
    peopleController.validateRegister,
    peopleController.registerPoolManager);


  module.exports = router;