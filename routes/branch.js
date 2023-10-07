const express = require('express');
const router = express.Router();
const Controller = require('../Controllers/branch');
function checkAuth(req, res, next) {
    if (req.session.user) {
      return next();
    } else {
      res.redirect("/");
    }
  }
  
router.get('/all', Controller.getAllBranch);

router.get('/:id', Controller.getEachBranch);

router.get('/create', Controller.getAddBranch);

router.post('/create', Controller.addBranch);

router.get('/update/:id', Controller.getUpdateBranch);

router.post('/update/:id', Controller.updateBranch);

router.get('/delete/:id', Controller.deleteBranch);

router.get('/students', Controller.getAllStudent);

module.exports = router;
