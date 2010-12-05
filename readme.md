# ain

Brain-free node.js logger for syslog.

*Ain* written with full compatibility with *node.js* `console` module. It 
implements all `console` functions and formatting. Also *ain* supports UTF-8 
(tested on Debian Testing/Sid).

## Usage

Usage of *ain* is very similar to *node.js* console. Following example 
demonstrates the replacement of the console:

    var console = require('ain');
    console.init(logger.LEVEL0, 'node-test-app');
    
    console.log('notice level by number %d', Date.now());
    console.info('info level');
    