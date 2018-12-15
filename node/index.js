var http = require('http');
const log4js = require('log4js');
log4js.configure({
    appenders: {
        ruleConsole: { type: 'console' },
        ruleFile: {
            type: 'dateFile',
            // 这个目录是相对于根目录的，即与app.js 是同一级的
            filename: 'logs/server-',
            pattern: 'yyyy-MM-dd.log',
            maxLogSize: 10 * 1000 * 1000,
            numBackups: 3,
            alwaysIncludePattern: true
        }
    },
    categories: {
        default: { appenders: ['ruleConsole', 'ruleFile'], level: 'info' }
    }
});
const logger = log4js.getLogger('cheese');

var _ = process.argv.splice(2);
var options = {
    hostname: '127.0.0.1',
    port: 3000,
    path: '/' + _[0],
    method: 'GET'
};

var req = http.request(options, function (res) {
});

req.on('error', function (e) {
    logger.error('请求出现异常:', e);
});

req.end();  
