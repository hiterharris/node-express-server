const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({Router: 'Cohorts'});
});

module.exports = router;