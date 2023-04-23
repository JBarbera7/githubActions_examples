const core = require('@actions/core');
const fs = require('fs').promises;

async function main() {

    try {
        const success_msg = core.getInput('frase_positiva').split(' ').join('_');
        const error_msg = core.getInput('frase_negativa').split(' ').join('_');
        const res = core.getInput('resultado_tests');

        const img = res === 'success' ? 'stonks' : 'sarcasticbear';
        const URL = `https://api.memegen.link/images/${img}/${res === 'success' ? success_msg : error_msg}.png`;

        const old_readme = await fs.readFile('./readme.md', 'utf8');
        const new_readme = old_readme + `<img src="${URL}" />`;
        
        await fs.writeFile('./readme.md', new_readme);
        process.exit(0);
    } catch (error) {
        core.setFailed(error);
    }
}

main();