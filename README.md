
## imitate ONE

简介:这是一个使用vue仿的[ONE.一个]app,纯粹学习而已。

## 声明 更新于2018-10-14。
## 这基本是一个过期的demo了，因为原本所用到的技术都更新了，所以请参考我隔壁的[最新demo](https://github.com/eidonlon/imitate-beautiful-thing). 

## 用到的技术

vue2 + vue-router + vue-resource + webpack + express + Node爬虫

## 后台接口数据

​用express 搭建的后台，除了图文、阅读、音乐页面的列表是读取的本地json文件外，首页以及其他详情数据都是用爬虫爬取得[ONE.一个]网站的数据[注：这里爬取数据只是一个练习，练习而已，并没有非法使用爬来的数据呀 :scared:  ]。

## 关于爬虫

这里只是一个非常简单的爬虫，用的是Node HTTP API的get方法，获取到要爬取的页面，然后使用`cheerio` 进行解析处理获得想要的数据。

## 运行项目

``` bash
#先克隆项目
git clone https://github.com/eidonlon/imitate-One.git

#进入文件夹
cd imitate-One

#安装依赖
npm install

#运行
npm run dev

#然后浏览器会自动打开页面，请在chrome下调成手机模式预览
#另，项目打包[此处只打包了前端的代码，后台并没有一起被打包]
npm run build 
```


## 效果演示

线上效果请[戳这里](http://ddan.applinzi.com/one#/);(请在chrome下调成手机模式预览)


##### 移动端扫描下方二维码
![二维码](https://github.com/eidonlon/imitate-One/blob/master/static/images/link.png)

## 部分截图

首页

![home](https://github.com/eidonlon/imitate-One/blob/master/static/images/home.jpg)


菜单

![menu](https://github.com/eidonlon/imitate-One/blob/master/static/images/menu.jpg)


音乐

![music](https://github.com/eidonlon/imitate-One/blob/master/static/images/music.jpg)


阅读

![read](https://github.com/eidonlon/imitate-One/blob/master/static/images/read.jpg)

**都看到这里，给个star 吧。**


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
