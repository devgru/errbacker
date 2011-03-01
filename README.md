Use like this:

    var errbacker = require('errbacker')
    var errback = console.error
    
    var callback = console.log //your function where you want to push results
    
    var withoutErrors = errbacker.curry(errback)
    fs.stat('/tmp', withoutErrors(callback))

