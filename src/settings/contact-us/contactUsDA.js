var ContactUs = require('./../../model/contactus.model');

exports.createContactUs = function (req, res) {
      
    ContactUs.find({}).select().exec(function (err, contactdata) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var contactus = new ContactUs(req.body);
            if (contactdata.length === 0) {
                
                contactus.save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while saving data'
                            })
                        } else {
                            ContactUs.find({}).select().exec(function (err, contactData) {
                                if (err) {
                                    res.status(500).send({
                                        "result": 'error occured while retreiving data'
                                    })
                                } else {
                                    res.status(200).json(contactData);
                                }
                            })
                        }
                    })
                

            } else {
                contactdata[0].phoneNumber = req.body.phoneNumber;
                contactdata[0].emailId = req.body.emailId;
                contactdata[0].address = req.body.address;
               
                contactdata[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        ContactUs.find({}).select().exec(function (err, contactData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(contactData);
                            }
                        })
                    }
                })

            }
        }
    });
}

exports.getContactDetails = function (req, res) {
    ContactUs.find({}).select().exec(function (err, contactData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            res.status(200).json(contactData);
        }
    })
}

exports.updateContactDetails = function (req, res) {
    ContactUs.find({
        '_id': req.params.id,
    }, function (err, contactData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            contactData[0].phoneNumber = req.body.phoneNumber;
            contactData[0].emailId = req.body.emailId;
            contactData[0].address = req.body.address;
            contactData[0].save( function (err, footerDa) {
                if (err) {
                    console.log(err);
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    ContactUs.find({}).select().exec(function (err, contactData) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while retreiving data'
                            })
                        } else {
            res.status(200).json(contactData);
                        }
                    })
                }
            })
        }
    });
}