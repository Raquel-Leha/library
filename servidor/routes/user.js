
const { Router } = require('express');
const router = Router();
const User = require ('../models/User');
const jwt = require('jsonwebtoken');

router.get('/', (req,res) => res.send('hola'))


router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({email, password});
    await newUser.save();

    const token = jwt.sign({_id: newUser._id}, 'palabrasupersecreta');
    res.status(200).json({token});
})


router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email});
    if (!user) return res.status(401).send('No existe este email');
    if(user.password !== password) return res.status(401).send('Wrong Password');

    const token = jwt.sign({_id: user._id}, 'palabrasupersecreta');
    return res.status(200).json({token});
})

router.get('/my-books', verifyToken, (req, res) => {
    res.json([
        {
            description: 'esta es tu ruta privada raquel',
            name: raquel
        }
    ])
})







module.exports = router;

function verifyToken (req, res, next) {
    if(!req.headers.authorization) {
        return res.status(401).send('Peticion no autorizada');
    }

    const token = req.headers.authorization.split('')[1];
    if(token === 'null') {
        return res.status(401).send('Peticion no autorizada');
    }

    const payload = jwt.verify(token, 'palabrasupersecreta');
    req.userId = payload._id;
    next();

}