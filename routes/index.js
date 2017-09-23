const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', catchErrors(userController.getUsers));
router.post('/register', catchErrors(userController.createUser));
module.exports = router;
