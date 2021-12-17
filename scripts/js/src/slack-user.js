const { userMap } = require('../config');

function mapToSlackId(githubUserId) {
    return userMap[githubUserId] ? userMap[githubUserId] : githubUserId;
}

module.exports = {
    mapToSlackId
}