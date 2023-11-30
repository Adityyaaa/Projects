const wbm = require('wbm');

wbm.start().then(async () => {
    const phones = ['919696282726'];
    const message = 'Hey there, this is Aditya Awasthi!';
    await wbm.send(phones, message);
    await wbm.end();
}).catch(err => console.log(err));