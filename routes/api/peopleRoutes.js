const router = require('express').Router();
const peopleController = require('../../controllers/peopleController');
const authController = require('../../controllers/authController');
const { catchErrors } = require('../../handlers/errorHandlers');

// Matches with "/api/people"

router.route('/pool-managers')
  // .get(catchErrors(articleController.findAll))
  .post(
    peopleController.validateRegister,
    catchErrors(peopleController.registerPoolManager));

router.route('/login')
  .post(authController.loginUser);

router.route('/userData')
  .get(peopleController.userData);


  module.exports = router;