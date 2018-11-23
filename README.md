# hello_webpack


#### 安装依赖:
```
npm install

```
#### 构建打包:
``` 
$npx webpack --config webpack.config.js
``` 
OR:
``` 
$ npm run build
```




![](https://upload-images.jianshu.io/upload_images/1233356-926ed47b4f98f089.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


# Webpack 是什么

> 模块打包器 (module bundler). 
能够将任何资源如 JavaScript 文件、CSS 文件、图片等打包成一个或少数文件。

Webpack 是一个前端资源加载/打包工具。它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源。

![image.png](https://upload-images.jianshu.io/upload_images/1233356-bb5ec73b18c4b436.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

WebPack 做的事情是: 分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其打包为合适的格式以供浏览器使用。

![](https://upload-images.jianshu.io/upload_images/1233356-ee4fe8d2948f4c6a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



# 安装

```
npm install webpack -g
```
当前目录安装:
```
npm install webpack webpack-cli  --save-dev
```



# 快速上手实例

极简例子:
![](https://upload-images.jianshu.io/upload_images/1233356-d24363c60ae16fb1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



index.js
```
import _ from 'lodash';

function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
```

index.html

```
<!doctype html>
<html>
<head>
    <title>Getting Started</title>
    <!--<script src="https://unpkg.com/lodash@4.16.6"></script>-->
</head>
<body>
<script src="main.js"></script>
</body>
</html>
```

package.json
```
{
  "name": "hello_webpack",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config webpack.config.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.26.0",
    "webpack-cli": "^3.1.2"
  },
  "dependencies": {
    "lodash": "^4.17.11"
  }
}

```
webpack.config.js
```
const path = require('path');

module.exports = {
    mode: "development", // "production" | "development" | "none"
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'static')
    }
};
```

>注：`__dirname` 是node.js中的一个全局变量，它指向当前执行脚本所在的目录。

源码地址:https://github.com/microu2018/hello_webpack

https://segmentfault.com/a/1190000010871559
https://webpack.js.org/guides/getting-started/
https://github.com/ruanyf/webpack-demos

# webpack，gulp/grunt，npm，它们有什么区别?
webpack 是模块打包器（module bundler），把所有的模块打包成一个或少量文件，使你只需加载少量文件即可运行整个应用，而无需像之前那样加载大量的图片，css文件，js文件，字体文件等等。

而gulp／grunt 是自动化构建工具，或者叫任务运行器（task runner），是把你所有重复的手动操作让代码来做，例如压缩JS代码、CSS代码，代码检查、代码编译等等，自动化构建工具并不能把所有模块打包到一起，也不能构建不同模块之间的依赖图。

两者来比较的话，gulp/grunt 无法做模块打包的事，webpack 虽然有 loader 和 plugin可以做一部分 gulp／grunt 能做的事，但是终究 webpack 的插件还是不如 gulp／grunt 的插件丰富，能做的事比较有限。

于是有人两者结合着用，将 webpack 放到 gulp／grunt 中用。然而，更好的方法是用 npm scripts 取代 gulp／grunt.

npm 是 node 的包管理器 (node package manager)，用于管理 node 的第三方软件包，npm 对于任务命令的良好支持让你最终省却了编写任务代码的必要，取而代之的，是老祖宗的几个命令行，仅靠几句命令行就足以完成你的模块打包和自动化构建的所有需求。

