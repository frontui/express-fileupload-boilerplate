# express-fileupload-boilerplate

- [x] express
- [x] express-fileupload

图片上传测试，当我们在使用 mock 服务器时无法模拟文件上传功能
以往的文件上传是依赖 php 的 wamp 服务
现在使用 express 实现简单的文件上传，作为 mock 服务的辅助

## Install

```
git clone https://github.com/tomieric/express-fileUpload-boilerplate.git myproject && cd myproject
```

下载后安装依赖

```
npm install
```

## RUN

```
npm start
```

## USAGE

上传地址为

```
http://localhost:3000/upload
```

修改服务端口号`bin/www`文件

已设置了 CORS 跨域设置，我们在项目中直接把上传地址设置为`http://localhost:3000/upload`或者将文件上传的 URL 统一代理