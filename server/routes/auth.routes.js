const Router = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');
const router = new Router();
const authMiddleware = require('../middleware/auth.middleware');

router.post('/registration', [
      check('email', 'Uncorrect email').isEmail(),
      check('password', 'Password mast be longer then 3 and shorter then 12')
          .isLength({min: 3, max: 12}),
    ],
    async (req, res) => {
      try {
        console.log(req.body);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.json({message: 'Uncorect request'});
        }
        const {email, password} = req.body;
        const candidat = await User.findOne({email});
        if (candidat) {
          return res.json({message: `User whith email ${email} already exist`});
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = new User({email, password: hashPassword});
        await user.save();
        return res.json({message: 'User was created'});
      } catch (error) {
        res.send({message: 'Server error'});
        throw  error;
      }
    },
);

router.post(
    '/login',
    async (req, res) => {
      try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (!user) {
          return res.status(400).json({message: 'User not found'});
        }
        const isPassValid = bcrypt.compareSync(password, user.password);
        if (!isPassValid) {
          return res.status(400).json({message: 'Invalid password'});
        }
        const token = jwt.sign({id: user.id}, config.get('secretKey'), {expiresIn: '1h'});
        return res.json({
          token,
          user: {
            id: user.id,
            email: user.email,
          },
        });
      } catch (error) {
        res.send({message: 'Server error'});
        throw  error;
      }
    },
);

router.get(
    '/auth', authMiddleware,
    async (req, res) => {
      try {
        const user = await User.findOne({_id: req.user.id});
        const token = jwt.sign({id: user.id}, config.get('secretKey'), {expiresIn: '1h'});
        return res.json({
          token,
          user: {
            id: user.id,
            email: user.email,
          },
        });
      } catch (error) {
        res.send({message: 'Server error'});
        throw  error;
      }
    },
);

module.exports = router;