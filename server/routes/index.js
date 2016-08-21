const express = require('express');
const Path    = require('path');

const router  = express.Router();

router.get('/api/tags', (req, res) => {
  res.send(['node', 'express', 'webpack', 'react']);
});

router.get('/*', (req, res) => {
  res.sendFile(Path.resolve(__dirname, '../../dist', 'index.html'));
});

module.exports = router;
