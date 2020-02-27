const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({router: 'Students'});
});

module.exports = router;