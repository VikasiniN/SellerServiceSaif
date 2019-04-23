var viewBookingsMgr = require('./bookings/viewBookingsMgr');

module.exports = function(app) {
    app.route('/allbookings')
        .get(viewBookingsMgr.allBookings);

        app.route('/bookings/:id')
        .get(viewBookingsMgr.singleBookings);

        app.route('/statusupdate/:id') 
        .put(viewBookingsMgr.updateStatus);

      

}