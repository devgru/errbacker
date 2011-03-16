var errbacker = module.exports = {
    create: function (callback, errback) {
        return function (error) {
            if (error) {
                errback(error)
                return
            }
            var results = arguments
            Array.prototype.shift.call(results) //removing first
            if (callback) {
                try {
                    callback.apply(null, results)
                } catch (e) {
                    errback(e)
                }
            }
        }
    },

    curry: function (errback) {
        return function (callback) { return errbacker.create(callback, errback) }
    }
}
