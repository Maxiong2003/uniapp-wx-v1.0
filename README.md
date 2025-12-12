#### 一、项目简介
+ 此项目前端使用`uniapp`，后端可使用`SpringBoot`。

#### 三、技术栈
+ 推送：uniPush + websocket
+ 资源：阿里OSS（图片、声音、视频、文件等）
+ 音视频：TRTC
+ 地图：高德地图
+ 短信：阿里云短信
+ 后端：Hutool、MyBatis-Plus、shiro、sharding-jdbc、接口版本控制等
+ 前端：uniapp(Vue3)


#### 四、项目结构
+ 前端：
  + 项目根目录
    + `common`：公共模块，包含全局变量、工具函数、请求拦截器等
    + `components`：自定义组件
    + `pages`：页面模块，每个页面对应一个文件夹，包含该页面的.vue文件、.scss文件等
    + `static`：静态资源，如图片、字体等
    + `utils`：工具模块，包含一些辅助函数
    + `App.vue`：应用入口文件
    + `main.js`：应用初始化文件
    + `manifest.json`：应用配置文件
    + `pages.json`：页面路由配置文件
    + `uni.scss`：全局样式文件
  + 项目根目录下的其他文件：如`README.md`、`package.json`等
+ 后端：
  + 项目根目录
    + `controller`：控制器模块，处理前端请求
    + `service`：服务模块，包含业务逻辑
    + `dao`：数据访问模块，与数据库交互
####

