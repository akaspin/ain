# ain*

Brain-free [syslog](http://en.wikipedia.org/wiki/Syslog)** logging for 
[node.js](http://nodejs.org).

*Ain* written with full compatibility with *node.js* `console` module. It 
implements all `console` functions and formatting. Also *ain* supports UTF-8 
(tested on Debian Testing/Sid).

*In the Phoenician alphabet letter "ain" indicates eye.
**All examples tested under Debian Squeeze `rsyslog`. On other operating 
systems and logging daemons settings and paths may differ.

## Usage

Usage of *ain* is very similar to *node.js* console. Following example 
demonstrates the replacement of the console:

    var console = require('ain');
    
    console.log('notice severity by number %d', Date.now());
    console.info('info severity');
    console.error('error severity');
    
After launch in `/var/log/user` you can see the following:

    
    
As noticed before *ain* implements all `console` functions.
