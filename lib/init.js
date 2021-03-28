const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const deployConfigPath = path.resolve(process.cwd(), './deploy.config.js');
const initConfig = [
  {
    name: '', // 项目名称
    host: '', // 服务器ip地址
    username: '', // 服务器用户名
    password: '', // 服务器密码
    privateKey: '', // 服务器私钥
    port: 22, // 端口 默认为22
    distPath: '', // 需要部署的打包过后的文件夹 根据项目不同值不同 一般为 build static dist 默认为dist
    script: '', // 打包命令 可能项目由不同的构建命令 如打包指定环境的代码 默认npm run build
    path: '', // 服务器存放静态文件目录
    command: [], // 连接成功后执行的命令
    afterCmd: [], // 上传文件后执行的命令
  },
];

// 创建配置文件
const createConfigFile = jsonObj => {
  const str = `module.exports = ${JSON.stringify(jsonObj, null, 2)}`;
  fs.writeFileSync(deployConfigPath, str);
};

module.exports = () => {
  if (fs.existsSync(deployConfigPath)) {
    console.log(chalk.red('deploy.config.js 配置文件已存在'));
    process.exit(1);
  } else {
    createConfigFile(initConfig);
    console.log(chalk.green(`配置文件'deploy.config.js'生成成功`));
    process.exit(0);
  }
};
