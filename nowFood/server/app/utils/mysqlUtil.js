const mysql = require('mysql');
const log4js = require('log4js')
import config from './../../config/config.local.js'

var log = log4js.getLogger("mysql");
var connectionPool = mysql.createPool({
    'host' : config.database.host,
    'port':config.database.port,
    'user' : config.database.user,
    'password' : config.database.password,
    'database' : config.database.database,
    // 'charset': config.database.charset,
    'connectionLimit': config.database.connectionLimit,
    'supportBigNumbers': true,
    'bigNumberStrings': true
});

var release = connection => {
    connection.end(function(error) {
        if(error) {
            log.warn('Connection closed failed.');
        } else {
            log.info('Connection closed succeeded.');
        }
    });
};

var execQuery = sqlOptions => {
    var results = new Promise((resolve, reject) => {
            connectionPool.getConnection((error,connection) => {
            if(error) {
                log.error("Get connection from mysql pool failed !");
                throw error;
            }

            var sql = sqlOptions['sql'];
            var args = sqlOptions['args'];
            log.info("Execute sql:"+sql)
            log.info("Execute args:"+JSON.stringify(args))
            if(!args) {
                var query = connection.query(sql, (error, results) => {
                    if(error) {
                        log.error('Execute query error !');
                        throw error;
                    }

                    resolve(results);
                });
            } else {
                var query = connection.query(sql, args, function(error, results) {
                    if(error) {
                        log.error('Execute query error !');
                        throw error;
                    }

                    resolve(results);
                });
            }

            connection.release(function(error) {
                if(error) {
                    log.warn('Mysql connection close failed !');
                    throw error;
                }
            });
        });
    }).then(function (chunk) {
        return chunk;
    });

    return results;
};

module.exports = {
    release : release,
    execQuery : execQuery
}