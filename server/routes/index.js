const express = require('express');
const router  = express.Router();

router.get('/api/tags', function(req, res) {
  res.send(['node', 'express', 'webpack', 'react']);
});

router.get('/*', function(req, res){
  res.redirect('/');
});

module.exports = router;
