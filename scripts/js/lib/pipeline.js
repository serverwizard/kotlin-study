const getPipelineConfig = () => {
    const commitNumber = process.env.GO_REVISION_GIT;
    const pipelineName = process.env.GO_PIPELINE_NAME;
    const pipelineCounter = process.env.GO_PIPELINE_COUNTER;
    const prId = process.env.GO_SCM_PG_SETTING_API_PR_PR_ID;
    const env = process.env.ENV;

    console.log(env)

    const environment = getEnvironment(pipelineName, env);

    return {
        commitNumber,
        prId,
        pipelineName,
        pipelineCounter,
        environment
    }
}

function getEnvironment(pipeline, env) {
    if(pipeline.includes('docs')) {
        return 'docs';
    } else if(env.includes('dev')) {
        return 'dev';
    } else if(env.includes('live')) {
        return 'live';
    } else {
        return 'dev';
    }
}

module.exports = {
    getPipelineConfig
}