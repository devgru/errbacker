var errbacker = module.exports = {
    create: function (callback, errback) {
        return function (error, result) {
            if (error) errback(error);
            else if (result) callback(result);
        };
    },

    curry: function (errback) {
        return function (callback) { return errbacker.create(callback, errback); };
    }
};
