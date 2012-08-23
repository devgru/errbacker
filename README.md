[![build status](https://secure.travis-ci.org/devgru/errbacker.png)](http://travis-ci.org/devgru/errbacker)
Use like this:

    var errbacker = require('errbacker')
    var errback = console.error
    
    var callback = console.log //your function where you want to push results
    
    var withoutErrors = errbacker.curry(errback)
    fs.stat('/tmp', withoutErrors(callback))

