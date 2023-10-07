const express = require('express');
const router = express.Router();
const Controller = require('../Controllers/registration');

router.post('/adminSignIn', Controller.adminSignIn);

router.post('/studentSignIn', Controller.studentSignIn);

router.post('/adminSignUp', Controller.adminSignUp);

router.post('/studentSignUp', Controller.studentSignUp);

router.get('/admin-logout', Controller.adminSignOut);

router.get('/student-logout', Controller.studentSignOut);

router.get('adminSignIn', Controller.getAdminSignUp);

router.get('studentSignIn', Controller.getStudentSignUp);



module.exports = router;