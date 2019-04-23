var Bookings = require('../../model/booking.model');

exports.allBookings = function (req, res) {
    Bookings.find({}).select().exec(function (err, booking) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(booking);
        }
    });
}

exports.singleBookings = function (req, res) {
    Bookings.find({
        '_id': req.params.id
    }, function (err, bookingDetails) {
        if (err) {
            res.status(500).json({
                "result": 0
            })
        } else {
            res.status(200).json(bookingDetails[0]);

        }
    })
}


exports.updateStatus = function (req, res) {
    Bookings.findOne({_id: req.params.id}).select().exec(function (err, bookings) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving all orders."
            });
        } else {
            bookings.bookingStatus = req.body.bookingStatus;
            bookings.save(function(err, orders) {
               if(err) {
                   console.log(err);
               } else {
                Bookings.find({_id: req.params.id}).select().exec(function (err, bookings) {
                    if (err) {
                        res.status(500).send({
                            message: "Some error occurred while retrieving all orders."
                        });
                    } else {
                       
                        res.status(200).json(bookings[0]);
                    }
                });
               }
           })
            
        }
    });
}