require('dotenv').config();

const { Err } = require('./err');
const Libs = require('./libs');

Libs.notify(new Err('message', 'RuntimeError', 'background', 'getsiteInfo', {jid: 123}));
