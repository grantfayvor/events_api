var express = require('express'),
    router = express.Router(),
    eventController = new(require('../controllers/EventController'));

router.get('/', eventController.get.bind(eventController));
router.post('/', eventController.save.bind(eventController));

module.exports = router;