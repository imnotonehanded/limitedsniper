const request = require('request');

request('https://economy.roblox.com/v1/users/530764514/currency', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body);
    console.log(body.explanation);
});