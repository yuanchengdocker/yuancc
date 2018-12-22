const fs = require('fs')
const path = require('path')

class LoggerFactory{
    static getLogger(config){
        var accessLogFile = path.join(config.log.logDir,config.log.accessLogFile)
        return async (ctx,next)=> {
            const start = Date.now()
            const requestTime = new Date()

            return next().then(()=>{
                const ms = Date.now() - start
                const lientIp = ctx.request.href
                let logout = `${lientIp} -- ${requestTime} -- ${ctx.method} -- ${ctx.url} -- ${ms}ms`
                // 命令行模式下向终端输出日志
                fs.appendFileSync(accessLogFile, logout + '\n')
            }).catch((err) => {
                console.log(err)
            })
        }
    }
}

module.exports = LoggerFactory