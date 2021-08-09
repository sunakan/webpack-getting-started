// import path from 'path';
// だとうまくいかない
const path = require('path');


// Q. 何を起点にバンドルするか
// A. ./src/index.js
//
// Q. outputはどこにするか？
// A. __dirname/dist/main.js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
