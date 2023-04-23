const core = require('@actions/core');
const fs = require('fs');




async function main() {

  try {
      const success_msg = core.getInput('frase_positiva').split(' ').join('_');
      const error_msg = core.getInput('frase_negativa').split(' ').join('_');
      const res = core.getInput('resultado_tests');

      const img = res === 'success' ? 'stonks' : 'sarcasticbear';
      const URL = `https://memegen.link/images/buzz/mocking-buzz.png`;

      const old_readme = await fs.readFile('./OldREADME.md', 'utf8');
      const new_readme = old_readme + `<img src="${URL}" />`;
      
      await fs.writeFile('./README.md', new_readme);
      process.exit(0);
  } catch (error) {
      core.setFailed(error);
  }
}

main();




