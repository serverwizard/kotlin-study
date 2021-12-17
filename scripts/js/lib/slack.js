const request = require('./request');

module.exports = async function hookSlack(messageObj) {
    await request("https://hooks.slack.com/services/.../.../...", JSON.stringify(messageObj), {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        }
    })
}