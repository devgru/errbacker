var errbacker = module.exports = {
    create: function (callback, errback) {
        return function (error) {
            if (error) {
                errback(error)
                return
            }
            var results = arguments
            Array.prototype.shift.call(results) //removing first
            if (callback) callback.apply(null, results)
        }
    },

    curry: function (errback) {
        return function (callback) { return errbacker.create(callback, errback) }
    }
}
