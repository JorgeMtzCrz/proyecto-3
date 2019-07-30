const User = require('../models/User')
const { createToken, createTokenU } = require('../config/jwt')

exports.signup = (req, res, next) => {
    User.register({...req.body }, req.body.password)
        .then(user => res.status(201).json({ user }))
        .catch(err => res.status(500).json({ err }))
}

exports.login = (req, res, next) => {
    const { user } = req
    const [header, payload, signature] = createToken(user)
    res.cookie('headload', `${header}.${payload}.`, {
        expires: 1000 * 60 * 30,
        secure: true
    })
    res.cookie('signature', signature, {
        httpOnly: true,
        secure: true
    })
    res.status(200).json({ user })
}

exports.oneUser = (req, res, next) => {
    const { id } = req.params
    User.findById(id)
        .then(user => res.status(200).json({ user }))
        .catch(err => res.status(500).json({ err }))
}


exports.logout = (req, res, next) => {
    res.clearCookie('headload')
    res.clearCookie('signature')
    res.status(200).json({ msg: 'Logged out' })
}

exports.universities = (req, res, next) => {

    User.find({ role: 'UNIVERSITY' })
        .then(user => res.status(200).json({ user }))
        .catch(err => res.status(500).json({ err }))
}