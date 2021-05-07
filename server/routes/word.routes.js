const Router = require('express');
const router = new Router();
const Word = require('../models/Word');
const authMiddleware = require('../middleware/auth.middleware');

router.get(
    '/words',
    async (req, res) => {
      try {
        const words = await Word.find();
        return res.json({
          words
        });
      } catch (error) {
        res.send({message: 'Server error'});
        throw  error;
      }
    },
);

module.exports = router;