/*const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('You', () => {
  let lastCommand, repoDirectoryContents;
  before(async () => {
    repoDirectoryContents = await getDirectoryContents('../sql_reference');
    lastCommand = await getLastCommand();
  });

  it('should use the "touch" command to create the correct file', async () => {
    assert(lastCommand[0] === 'touch' && /README\.md/.test(lastCommand[1]) && repoDirectoryContents.indexOf('README.md' >= 0));
  });
});*/