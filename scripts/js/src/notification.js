const { repository } = require('../config');
const { fetchGitInfoByCommit, fetchGitInfoByPr } = require('../lib/github')

const buildGocdUrl = (pipeline, count, stage, environment) => {
    if(environment === 'docs') {
        return `https://gocd.dev.../${pipeline}/${count}/${stage}/1/gradle`;
    } else if(environment === 'dev') {
        return `https://gocd.dev.../${pipeline}/${count}/${stage}/1/gradle`;
    } else {
        return `https://gocd.live.../${pipeline}/${count}/${stage}/1/gradle`;
    }
}

async function findNotification(commitNumber, prId, pipelineName, pipelineCounter, environment) {
    if (commitNumber) {
        // Merge된 경우
        const { userId, githubUrl } = await fetchGitInfoByCommit(repository.name, commitNumber);
        return {
            gocdUrl: buildGocdUrl(pipelineName, pipelineCounter, "build", environment),
            githubUserId: userId,
            githubUrl: githubUrl,
            task: "빌드"
        }
    } else {
        // PR을 올린 경우
        const { userId, githubUrl } = await fetchGitInfoByPr(repository.name, prId);
        return {
            gocdUrl: buildGocdUrl(pipelineName, pipelineCounter, "test", environment),
            githubUserId: userId,
            githubUrl: githubUrl,
            task: "PR 테스트"
        }
    }
}

module.exports = {
    findNotification
}