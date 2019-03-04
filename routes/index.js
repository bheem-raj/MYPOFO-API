const router = require('express').Router();

router.get('/',(req,res,next)=>{
   res.send('API started');
})

module.exports = router;