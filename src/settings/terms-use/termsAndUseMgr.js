var termsDA = require('./termsAndUseDA');



exports.createTerms = function (req, res) {
    try {
        termsDA.createTerms(req, res);

    } catch (error) {
        console.log(error);
    }
}


exports.getTerms = function (req, res) {
    try {
        termsDA.getTerms(req, res);

    } catch (error) {
        console.log(error);
    }
}

exports.deleteTerms = function (req, res) {
    try {
        termsDA.deleteTerms(req, res);

    } catch (error) {
        console.log(error);
    }
}

exports.updateTerms = function (req, res) {
    try {
        termsDA.updateTerms(req, res);

    } catch (error) {
        console.log(error);
    }
}

