const { mapToSlackId } = require('./src/slack-user');
const { slack } = require('./config');
const { findNotification } = require('./src/notification');
const hook = require('./lib/slack');
const { getPipelineConfig } = require('./lib/pipeline');

(async function () {
    const { commitNumber, prId, pipelineName, pipelineCounter, environment } = getPipelineConfig();

    const { githubUserId, githubUrl, gocdUrl, task } = await findNotification(commitNumber, prId, pipelineName, pipelineCounter, environment);
    const slackId = mapToSlackId(githubUserId);

    const message = {
        "channel": slack.channelId,
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `:whip: ${pipelineName} ${task} 실패 - <@${slackId}>`
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `:right_blue_arrow: <${gocdUrl}|GoCd 바로가기>`
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `:right_blue_arrow: <${githubUrl}|Github 바로가기>`
                }
            }
        ]
    };

    await hook(message);
})();