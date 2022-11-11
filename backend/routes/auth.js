const router = require('express').Router()
import { User, Prisma } from '@prisma/client';
const dotenv = require('dotenv');
dotenv.config('../')
const   Joi = require('@hapi/joi');
const   jwt = require('jsonwebtoken');

const schema = {
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
}

router.post('/sign_in', async (req, res) => {

    const { error } = Joi.validate(req.body, schema);
    if (error) return res.status(400).send(error.details[0].message)

    res.send('Sign In');
    const user = new User({
        username:   req.body.username,
        email:      req.body.email,
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        res.status(404).send(error);
    }
});

router.post('/log_in', async (req, res) => {

    const token = jwt.sign({id: user.id}, process.env.SECRET_TOKEN);
    res.header('auth-token', token).send(token);

});


module.exports = router