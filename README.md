# 简洁的个人博客

标签（空格分隔）： node全栈

---

基于nodeJs、express、mongodb的简洁个人博客系统，采用了传统的后端渲染页面方式，一方面项目主要是用来熟悉后端的开发流程和模式，二是为了更好的SEO，数据库采用在线mlab在线的mongo数据库

##主要技术列表
- 服务端：Node.js >=7.9.0
- 数据库：MongoDB >=3.4
- WEB框架：Express 4.0
- 模板引擎：ejs
- JS和UI库：jquery,layui
- 
## 目录结构
后端采用传统的MVC结构，models是对象模型（就是数据格式），views是视图层，所有的请求通过routes（路由）分发。
```
├─config
├─models
├─public
├─router
└─views
    ├─admin
    └─html
```
## ScreenShot
![index.png-231.4kB][1]
![details.png-212.5kB][2]
![admin.png-63.7kB][3]


  [1]: http://static.zybuluo.com/wp0214/499tyepzs1xn1ysav240r92k/index.png
  [2]: http://static.zybuluo.com/wp0214/aq1mawdxvron3c19e1z8caac/details.png
  [3]: http://static.zybuluo.com/wp0214/ptbwcw80ll3db750earfuody/admin.png