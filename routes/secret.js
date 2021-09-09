const { Router } = require('express');

const secretController = require('../controller/secret');

const router = Router();

router.post('/generate-secret', secretController.generateSecret);
router.post('/generate-token', secretController.generateToken);
router.post('/validate-token', secretController.validateToken);

module.exports = router;
