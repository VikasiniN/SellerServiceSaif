var supportDA = require('./supportDA');


exports.createSupport = function (req, res) {
    try {
        supportDA.createSupport(req, res);

    } catch (error) {
        console.log(error);
    }
}
exports.getSupportDetails = function (req, res) {
    try {
        supportDA.getSupportDetails(req, res);

    } catch (error) {
        console.log(error);
    }
}

exports.updateSupportDetails = function (req, res) {
    try {
        supportDA.updateSupportDetails(req, res);

    } catch (error) {
        console.log(error);
    }
}

