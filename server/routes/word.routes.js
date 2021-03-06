const Router = require('express');
const router = new Router();
const Word = require('../models/Word');

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

router.post(
    '/newword',
    async (req, res) => {
      try {
        const {data, access} = req.body;
        const {wordEn, description, wordRus} = data;
        const word = new Word({wordEn, description, wordRus, access});
        await word.save();
        return res.send({message: 'Word was created'})
      } catch (error) {
        res.send({message: 'Server error'});
        throw  error;
      }
    },
);

module.exports = router;