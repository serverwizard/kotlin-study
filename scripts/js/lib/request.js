const https = require('https');

module.exports = function request(url, body, options) {
    return new Promise((resolve, reject) => {
        const request = https.request(url, options, (res) => {
            if (res.statusCode !== 200) {
                console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
                res.resume();
                return;
            }

            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('close', () => {
                resolve(data);
            });
        });

        request.on('error', (err) => {
            reject(`Encountered an error trying to make a request: ${err.message}`)
        });

        if (body) {
            request.write(body);
        }

        request.end();
    })
}