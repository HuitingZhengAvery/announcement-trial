const mongoose = require('mongoose');
const router = require('express').Router();
const Annoucement = mongoose.model('Annoucement');

router.post('/', (req, res, next) => { 
  const { body } = req;

  if(!body.title) {
    return res.status(422).json({
      errors: {
        title: 'is required',
      },
    });
  }
  
  if(!body.body) {
    return res.status(422).json({
      errors: {
        body: 'is required',
      },
    });
  }

  if(!body.author) {
    return res.status(422).json({
      errors: {
        author: 'is required',
      },
    });
  }


  const finalArticle = new Annoucement(body);
  return finalArticle.save()
    .then(() => res.json({ article: finalArticle.toJSON() }))
    .catch(next);
});

router.get('/', (req, res, next) => {
  return Annoucement.find()
    .sort({ createdAt: 'descending' })
    .then((Annoucement) => res.json({ Annoucement: Annoucement.map(article => article.toJSON()) }))
    .catch(next);
});

router.param('id', (req, res, next, id) => {
  return Annoucement.findById(id, (err, article) => {
    if(err) {
      return res.sendStatus(404);
    } else if(article) {
      req.article = article;
      return next();
    }
  }).catch(next);
});

router.get('/:id', (req, res, next) => {
  return res.json({
    article: req.article.toJSON(),
  });
});

router.patch('/:id', (req, res, next) => {
  const { body } = req;

  if(typeof body.title !== 'undefined') {
    req.article.title = body.title;
  }

  if(typeof body.body !== 'undefined') {
    req.article.body = body.body;
  }

  if(typeof body.author !== 'undefined') {
    req.article.author = body.author;   
  }



  return req.article.save()
    .then(() => res.json({ article: req.article.toJSON() }))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
  return Annoucement.findByIdAndRemove(req.article._id)
    .then(() => res.sendStatus(200))
    .catch(next);
});

module.exports = router;