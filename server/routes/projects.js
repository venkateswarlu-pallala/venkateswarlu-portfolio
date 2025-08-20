const router = require('express').Router();
let Project = require('../models/project.model');

// Get all projects
router.route('/').get((req, res) => {
  Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new project
router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const link = req.body.link;

  const newProject = new Project({
    title,
    description,
    link,
  });

  newProject.save()
    .then(() => res.json('Project added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;