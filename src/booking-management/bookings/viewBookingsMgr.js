var viewBookingsDA = require('./viewBookingsDA');

exports.allBookings = function (req, res) {
    try {
        viewBookingsDA.allBookings(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.singleBookings = function (req, res) {
    try {
        viewBookingsDA.singleBookings(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.updateStatus = function (req, res) {
    try {
        viewBookingsDA.updateStatus(req, res);
    } catch (error) {
        console.log(error);
    }
}



