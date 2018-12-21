/**
 * 后端模板和session使用
 */
const
    Koa = require('koa'),
    Router = require('koa-router'),
    path = require('path'),
    session = require('koa-session'),
    LoggerFactory = require('./lib/requestLog.js')

import configs from './config/config.default.js'

var app = new Koa()
var router = new Router()

var isDev = process.env.NODE_ENV !== "production"


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
app.use(session(config,app))

router.get('/index', async (ctx) => {
    // console.log(ctx.session)
    // ctx.response.type = 'html'
    // await ctx.render('index1',{list:{name:'张三'}})
    ctx.body = {code:0,data:[1,2,3,4]}
})
router.get('/new', async (ctx) => {
    ctx.body = `this page session is ${ctx.session.userinfo}`
})
router.get('/login', async (ctx) => {
    ctx.session.userinfo = "张三"
    ctx.body = "登录成功"
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(configs.port)
console.log('服务开启！')
