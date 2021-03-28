#!/usr/bin/env node
const program = require('commander');
const init = require('../lib/init');
const deploy = require('../lib/deploy');
program.version('1.0.0', '-v, --version');

program
  .command('init')
  .alias('i')
  .description('初始化配置文件')
  .action(() => {
    init();
  });

program
  .command('run')
  .alias('r')
  .description('自动化部署')
  .action(() => {
    deploy();
  });

program.parse(process.argv);
