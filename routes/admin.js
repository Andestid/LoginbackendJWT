const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        error:null,
        data: {
            titulo: "ruta protegida token",
            user: req.user
        }
    })
})

module.exports = router;