const router = require('express').Router();
let TargetGroup = require('../models/targetGroup.model');

router.route('/').get((req, res) => {
  TargetGroup.find()
    .then(targetGroups => res.json(targetGroups))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const groupname = req.body.groupname;
  const description = req.body.description;
  const problems = req.body.problems;
  const imageUrl = req.body.imageUrl;

  const newTargetGroup = new TargetGroup({
    groupname,
    description,
    problems,
    imageUrl,
  });

  newTargetGroup.save()
    .then(() => res.json(newTargetGroup))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:groupname').get((req, res) => {
  TargetGroup.findOne({ groupname: req.params.groupname })
    .then(targetGroup => res.json(targetGroup))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:groupname').delete((req, res) => {
  TargetGroup.findOneAndDelete({ groupname: req.params.groupname })
    .then(() => res.json(req.params.groupname))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:groupname').post((req, res) => {
  TargetGroup.findOne({ groupname: req.params.groupname })
    .then(targetGroup => {
      targetGroup.groupname = req.body.groupname;
      targetGroup.description = req.body.description;
      targetGroup.problems = req.body.problems;
      targetGroup.imageUrl = req.body.imageUrl;

      targetGroup.save()
        .then(() => res.json(targetGroup))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;