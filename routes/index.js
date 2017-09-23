const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', catchErrors(userController.getUsers));

module.exports = router;
