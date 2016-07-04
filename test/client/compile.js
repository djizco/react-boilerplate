const fs     = require('fs');
const path   = require('path');
const babel  = require('babel-core');
const origJs = require.extensions['.js'];


// jsx compiler

require.extensions['.js'] = function (module, fileName) {
  let output;
  if (fileName.indexOf('node_modules/react/Libraries/react/react.js') >= 0) {
    fileName = path.resolve('./test/client/mocks/react.js');
  }
  if (fileName.indexOf('node_modules/') >= 0) {
    return (origJs || require.extensions['.js'])(module, fileName);
  }
  let src = fs.readFileSync(fileName, 'utf8');
  output = babel.transform(src, {
    filename: fileName
  }).code;

  return module._compile(output, fileName);
};
