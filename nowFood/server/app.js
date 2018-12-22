/**
 * 后端模板和session使用
 */
const
    Koa = require('koa'),
    Router = require('koa-router'),
    path = require('path'),
    session = require('koa-session'),
    log4js = require('log4js'),
    LoggerFactory = require('./lib/requestLog.js')

import configs from './config/config.default.js'
import router from './app/router/routes'

var app = new Koa()

try {
    require('fs').mkdirSync(path.join(__dirname,'log'));
} catch (e) {
    if (e.code != 'EEXIST') {
        console.error("Could not set up log directory, error was: ", e);
        process.exit(1);
    }
}

log4js.configure(configs.log);
var log = log4js.getLogger("startup");

//配置session的中间件
app.keys = ['some secret hurr'];   /*cookie的签名*/
const config = {
    key: 'koa:sess', /** 默认 */
    maxAge: 10000,  /*  cookie的过期时间        【需要修改】  */
    overwrite: true, /** (boolean) can overwrite or not (default true)    没有效果，默认 */
    httpOnly: true, /**  true表示只有服务器端可以获取cookie */
    signed: true, /** 默认 签名 */
    rolling: true, /** 在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false） 【需要修改】 */
    renew: false
}
app.use(LoggerFactory.getLogger(configs))
app.use(session(config, app))

app.use(router.routes())
app.use(router.allowedMethods())

var server = app.listen(configs.port, ()=>{
    log.info('Express server listening on port ', server.address().port, " with pid ", process.pid );
    console.log('服务开启！')
})
