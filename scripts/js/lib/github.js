const request = require('./request');

async function fetchGitInfoByCommit(repo, commitNumber) {
    console.log("fetchGitInfoByCommit", repo, commitNumber)

    const options = {
        method: 'GET',
        headers: {
            Authorization: "",
            Accept: "application/vnd.github.groot-preview+json",
        }
    };

    const body = await request(`https://git.../${repo}/commits/${commitNumber}/pulls`, null, options);

    const pr = JSON.parse(body);

    // Commit
    if(pr.length === 0) {
        const body = await request(`https://git.../${repo}/commits/${commitNumber}`, null, options);
        const commitInfo = JSON.parse(body);

        return {
            userId: commitInfo.author.login,
            githubUrl: commitInfo.html_url
        }
    }
    // PR
    else {
        return {
            userId: pr[0].user.login,
            githubUrl: pr[0].html_url
        };
    }
}

async function fetchGitInfoByPr(repo, prId) {
    console.log("fetchGitInfoByPr", repo, prId)

    const options = {
        method: 'GET',
        headers: {
            Authorization: "",
            Accept: "application/vnd.github.groot-preview+json",
        }
    };

    const body = await request(`https://git.../${repo}/pulls/${prId}`, null, options);

    console.log(body);

    const prInfo = JSON.parse(body);

    return {
        userId: prInfo.user.login,
        githubUrl: prInfo.html_url
    }
}

module.exports = {
    fetchGitInfoByCommit,
    fetchGitInfoByPr
}