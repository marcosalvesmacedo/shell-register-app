const nodemon = require('nodemon');
nodemon({
    script: './jsonserver/index.js',
    ext: 'js json'
});

nodemon.on('start', () => {
    console.log('app iniciou');
}).on('quit', () => {
    console.log('app terminou');
}).on('restart', () => {
    console.log('app reiniciou');
});
