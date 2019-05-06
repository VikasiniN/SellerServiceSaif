var contactDA = require('./contactUsDA');


exports.createContactUs = function (req, res) {
    try {
        contactDA.createContactUs(req, res);

    } catch (error) {
        console.log(error);
    }
}


exports.getContactDetails = function (req, res) {
    try {
        contactDA.getContactDetails(req, res);

    } catch (error) {
        console.log(error);
    }
}

exports.updateContactDetails = function (req, res) {
    try {
        contactDA.updateContactDetails(req, res);

    } catch (error) {
        console.log(error);
    }
}


