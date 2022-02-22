const express =require ('express')
const router = express.Router()
const pcontroller = require('../controllers/pcontroller')


router.get('/', pcontroller.read);
router.get('/vclientesreg.ejs', pcontroller.readreg);
router.get('/vclientesnom.ejs', pcontroller.readnom);
router.get('/vclientesfec.ejs', pcontroller.readfec);
router.get('/vclientesx.ejs', pcontroller.reads);
router.post('/insert', pcontroller.insert);
router.get('/delete/:id', pcontroller.delete);
router.post('/update', pcontroller.update);
module.exports = router;
