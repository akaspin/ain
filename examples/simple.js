#!/usr/bin/env node
/* Simple example showing logging via TCP with callbacks */

var logger = require('../index.js')
              .set("ain-test", "user", "localhost", "localhost:5140","tcp");
            
logger.on("error", function(err) {
  console.log("Received Error : " + err);
});

logger.log('notice: %d', Date.now());
logger.info('info');
logger.error('error');
