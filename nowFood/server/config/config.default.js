import path from 'path'

const basePath = path.join(__dirname,"./")
export default {
    port: 3000,
    log: {
        logDir: basePath+"log",
        accessLogFile: "access.log",
        "appenders": {
            "access": {
                "type": "dateFile",
                "filename": basePath+"log/access.log",
                "pattern": "-yyyy-MM-dd",
                "category": "http"
            },
            "app": {
                "type": "file",
                "filename": basePath+"log/app.log",
                "maxLogSize": 10485760,
                "numBackups": 3
            },
            "errorFile": {
                "type": "file",
                "filename": basePath+"log/errors.log"
            },
            "errors": {
                "type": "logLevelFilter",
                "level": "ERROR",
                "appender": "errorFile"
            }
        },
        "categories": {
            "default": { "appenders": ["app", "errors"], "level": "DEBUG" },
            "http": { "appenders": ["access"], "level": "DEBUG" }
        }
    }
}
