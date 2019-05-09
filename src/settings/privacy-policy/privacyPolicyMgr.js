var privacyPolicyDA = require('./privacyPolicyDA');



exports.createPrivacyPolicy = function (req, res) {
    try {
        privacyPolicyDA.createPrivacyPolicy(req, res);

    } catch (error) {
        console.log(error);
    }
}

exports.getPrivacyPolicy = function (req, res) {
    try {
        privacyPolicyDA.getPrivacyPolicy(req, res);

    } catch (error) {
        console.log(error);
    }
}
exports.updatePrivacyPolicy = function (req, res) {
    try {
        privacyPolicyDA.updatePrivacyPolicy(req, res);

    } catch (error) {
        console.log(error);
    }
}

