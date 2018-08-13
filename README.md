# 多页应用 示例说明

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### 新建页面
参考src/views/Demo下的subModuleA subModuleB


### 路径映射
```
'@': 'src',
```

```
'@components': 'src/components',
```

```
'@assets': 'src/assets',
```

```
'@utils': 'src/utils',
```

```
'@store': 'src/store',
```

```
'@api': 'src/api',
```

```
'@mixin': 'src/styles/index.scss',
```

```
'@plugins': 'src/plugins'
```

不要使用../寻址


### vant 文档
https://youzan.github.io/vant/#/zh-CN/intro


### ESLint 
默认开启, ```console.log```或其他错误请修复后再提交代码

### Axios
dev环境请求地址修改@api/baseUrl.js ```devBaseAPI```属性
多个页面请求同一个restful地址,在@api/public.js、@store/modules/、@store/getters.js扩展

### 微信jdk
在@utils/wechat.js扩展微信接口功能

### SASS
页面已自动化导入@mixin和normalize.css 公用样式参照@styles/下文件修改
