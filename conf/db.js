//环境变量
const env = process.env.NODE_ENV

let MYSQL_CONF
let REDIS_CONF
if(env === 'DEV') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'blog2'
    }

    REDIS_CONF = {
        port: '6379',
        host: '127.0.0.1',
        auth: '123456'
    }
}

if(env === 'production') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '123456',
        port: '3306',
        database: 'blog2'
    }

    REDIS_CONF = {
        port: '6379',
        host: '127.0.0.1',
        auth: '123456'
    }
}

module.exports = {
    MYSQL_CONF,
    REDIS_CONF
}