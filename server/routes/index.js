const express = require('express');
const router  = express.Router();
const Path = require('path');

router.get('/api/tags', function(req, res) {
  res.send(['node', 'express', 'webpack', 'react']);
});

router.get('/*', function(req, res){
  res.sendFile(Path.resolve(__dirname, '../../dist', 'index.html'));
});

module.exports = router;
