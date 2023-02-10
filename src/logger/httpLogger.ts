const morgan = require('morgan');
const json = require('morgan-json');
const format = json({
  method: ':method',
  url: ':url',
  status: ':status',
  contentLength: ':res[content-length]',
  responseTime: ':response-time'
});

const _logger = require('./logger');
module.exports = morgan(format, {
  stream: {
    write: (message: string) => {
      const { method, url, status, contentLength, responseTime } =
        JSON.parse(message);

      _logger.info('HTTP Access Log', {
        timestamp: new Date().toString(),
        method,
        url,
        status: Number(status),
        contentLength,
        responseTime: Number(responseTime)
      });
    }
  }
});
