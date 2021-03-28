### 安装

```bash
$ npm i -g deploys
```

### 生成配置文件

```bash
$ deploys i
```

### deploy.config.js 配置

```js
[
  {
    name: '', // 项目名称
    host: '', // 服务器 ip 地址
    username: '', // 服务器用户名
    password: '', // 服务器密码
    privateKey: '', // 服务器私钥
    port: 22, // 端口 默认为 22
    distPath: '', // 需要部署的打包过后的文件夹 根据项目不同值不同 一般为 build static dist 默认为 dist
    script: '', // 打包命令 可能项目由不同的构建命令 如打包指定环境的代码 默认 npm run build
    path: '', // 服务器存放静态文件目录
    command: [], // 连接成功后执行的命令
    afterCmd: [], // 上传文件后执行的命令
  },
];
```

### 运行

```bash
$ deploys r
```
