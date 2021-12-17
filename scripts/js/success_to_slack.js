const { slack } = require('./config');
const { findNotification } = require('./src/notification');
const hook = require('./lib/slack');
const { getPipelineConfig } = require('./lib/pipeline');

(async function () {
    const { commitNumber, prId, pipelineName, pipelineCounter, environment } = getPipelineConfig();
    const { githubUserId, task } = await findNotification(commitNumber, prId, pipelineName, pipelineCounter, environment);

    const message = {
        "channel": slack.channelId,
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `:building_construction: ${pipelineName} ${task} 성공 (${githubUserId})`
                }
            }
        ]
    };

    await hook(message);
})();