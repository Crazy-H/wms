## 微信管理平台
1. 项目搭建
  + 技术栈：vue + vue-cli + webpack + vuex + vue-router + fetch + element-ui
    项目通过vue-cli脚手架工具搭建， webpack打包， 最新的vue-cli3.0即可快速搭建vue项目，后期考虑与使用pack，
  vue-cli3.0是否兼容还有待研究

  + 组件的开发：1.组件必须保证数据单一方向流动；2.组件的内部结构必须保证独立通用
  + 表单组件：基于element-UI开发的表单组件，注意的细节，不能使用props对象的属性直接对表单元素进行双向绑定，这样数据变成双向流动，难以调试，数据变得混乱，保证props与data的数据独立数据的输出，建议使用自定义时间输出数据，输出的数据不能与输入的数据有任何联系，及任何输出不改变输入

  + 组件的通用：作为系统的通用组件，需保证可以在其他的平台也能使用，例如在cms和微信管理系统中都能使用

2. 文件结构
```
  |--build
  |--config
  |--src  
  |  |--api  使用的fetch进行封装的http请求
  |     |--index.js  ajax封装
  |     |--api.js    请求的接口
  |  |--assets   静态文件
  |  |--components  组件的文件
  |  |--pages/views  视图文件
  |  |--router  路由配置
  |  |--store   状态管理仓库vuex
  |  |--utils   通用的方法
  |  |--App.vue
  |  |--main.js 
  |--static
  |--test
  |--.babelrc
  |--.eslintignore
  |--.gitignore
  |--.postcssrc.js
  |--index.html
  |--package.json
  |--readme.md
```
  项目使用eslint来规范代码，须严格按照eslint规范来写代码，规范可参考官方[eslint规范](https://eslint.org/docs/rules/)

3. 项目的模块
  - 登录页
  - 首页
  - 基础功能
    + 实时消息
    + 自定义菜单
    + 关键词回复
    + 关注自动回复
    + 图文素材库
  - 群发功能
    + 图文消息库
    + 模版消息群发
  - 粉丝管理
  - 标签管理
  - 工具管理
    + 带参二维码
    + 短链转换
    + 联登页面
    + 发放红包
    + 其他
  - 数据管理
    + 记录用户OpenID
    + 记录用户OpenID与会员CID的关系
    + 记录用户OpenID与对应公众号的关注/取消关注关系
    + 记录用户OpenID与用户标签的关系
