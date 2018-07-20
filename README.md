# 简洁的个人博客

node全栈
---
基于nodeJs、express、mongodb的简洁个人博客系统，采用了传统的后端渲染页面方式，一方面项目主要是用来熟悉后端的开发流程和模式，二是为了更好的SEO，数据库采用在线mlab在线的mongo数据库

##主要技术列表
- 服务端：Node.js >=7.9.0
- 数据库：MongoDB >=3.4
- WEB框架：Express 4.0
- 模板引擎：ejs
- JS和UI库：jquery,layui
## 目录结构
后端采用传统的MVC结构，models是对象模型（就是数据格式），views是视图层，所有的请求通过routes（路由）分发。
```
├─config(配置文件)
├─models(对象模型)
├─node_modules(依赖)
├─public(静态资源)
│  └─res
│      ├─layui(前端框架layui)
│      │  ├─css
│      │  ├─font
│      │  ├─images
│      └─static
│          ├─css
│          ├─images
│          ├─js
│          └─lib
├─router(路由)
└─views(视图模板)
    ├─admin(后台管理)
    └─html(前端展示)
```
##主要功能
- 路由分发模板渲染
- 文章的发布、修改、删除
- 文章评论功能
- 文章点赞统计
- 用户登陆
- 权限控制
- 在线留言
## ScreenShot
![index.png-231.4kB][1]
![details.png-212.5kB][2]
![admin.png-63.7kB][3]


  [1]: http://static.zybuluo.com/wp0214/499tyepzs1xn1ysav240r92k/index.png
  [2]: http://static.zybuluo.com/wp0214/aq1mawdxvron3c19e1z8caac/details.png
  [3]: http://static.zybuluo.com/wp0214/ptbwcw80ll3db750earfuody/admin.png