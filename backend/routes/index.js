const { Router } = require('express')
const router = Router()
const passport = require('../config/passport')
const { signup, login, logout, oneUser, universities } = require('../controllers/postController')
const { detailUniversity, oneUniversity, updateUniversity } = require('../controllers/postUniversity')
const { addCarreer, allCarreer, deleteCarreer, updateCarreer, oneCarreer } = require('../controllers/carreerController')
const uploadCloud = require('../config/cloudinary')
const { upload } = require('../controllers/uploadController')
const { verifyToken } = require('../config/jwt')



router.post('/upload', uploadCloud.single('photo'), upload)

router.post('/signup', signup)

router.post('/login', passport.authenticate('local'), login)

router.get('/perfil/:id', oneUser)

router.get('/logout', logout)

router.post('/detailU', detailUniversity)
router.get('/detailU/:id', oneUniversity)
router.patch('/university/:id', updateUniversity)

router.get('/universities', universities)

router.post('/carreer', verifyToken, addCarreer)
router.get('/carreer/:id', allCarreer)
router.delete('/carreer/:id', deleteCarreer)
router.patch('/carreer/:id', updateCarreer)
router.get('/carreero/:id', oneCarreer)


module.exports = router