#!/usr/bin/env node

const fs = require('fs');
const branchName = require('current-git-branch');

const commitMsgFile = process.argv[2];
const branch = branchName();

if (fs.existsSync(commitMsgFile) && branch) {
  let commitMsg = fs.readFileSync(commitMsgFile, 'utf8').trim();
  commitMsg = `${branch}: ${commitMsg}`;
  fs.writeFileSync(commitMsgFile, commitMsg);
}
