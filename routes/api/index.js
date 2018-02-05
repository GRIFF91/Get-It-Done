const router = require('express').Router();
const peopleRoutes = require('./peopleRoutes');
const poolRoutes = require('./poolRoutes');
const choreRoutes = require('./choreRoutes');

// People routes
router.use('/people', peopleRoutes);

// Pool routes
router.use('/pool', poolRoutes);

// Chore routes
router.use('/chore', choreRoutes);

  // .get(articleController.findAll)
  // .post(articleController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  // .get(articleController.findById)
  // .delete(articleController.remove);

module.exports = router;
