const core = require('@actions/core');
const core = require('@actions/github');
const { github } = require('@actions/github/lib/utils');

try{

    const nameToGreet = core.getInput('who-to-greet');
    console.log('Hello ${nameToGReet}!');
    const time = (new Date()).toLocaleTimeString();
    core.setOutput("time", time);

    const playload = JSON.stringify(github.context.playload, underfined, 2)
    console.log('The event payload: ${payload}');




}catch (error) {
   core.setFailed(error.message); 
}