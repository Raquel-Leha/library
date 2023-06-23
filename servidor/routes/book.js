


//Rutas para libro
const express = require('express');
const router = express.Router();
const User = require ('../models/User');
const jwt = require('jsonwebtoken');


//Importamos el controlador
const bookController = require('../controllers/bookController');


// api/books

router.post('/', bookController.addBook);
router.get('/my-books', verifyToken, bookController.listBooks);
router.get('/book-list', bookController.listBooks);
router.put('/:id', bookController.upDateBook);
router.get('/:id', bookController.getBook);  
router.delete('/:id', bookController.deleteBook);


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