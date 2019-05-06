var Support = require('../../model/support.model');

exports.createSupport = function (req, res) {
    
    Support.find({}).select().exec(function (err, supportData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var support = new Support(req.body);
            if (supportData.length == 0) {
                
                support.save(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while saving data'
                            })
                        } else {
                            Support.find({}).select().exec(function (err, supportData) {
                                if (err) {
                                    res.status(500).send({
                                        "result": 'error occured while retreiving data'
                                    })
                                } else {
                                    res.status(200).json(supportData);
                                }
                            })
                        }
                    })
                

            } else {
                supportData[0].whatsappNumber = req.body.whatsappNumber;
                supportData[0].emailId = req.body.emailId;
                supportData[0].openTimings = req.body.openTimings;
               
                supportData[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        Support.find({}).select().exec(function (err, supportData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(supportData);
                            }
                        })
                    }
                })

            }
        }
    });
}

exports.getSupportDetails = function (req, res) {
    Support.find({}).select().exec(function (err, supportData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            res.status(200).json(supportData);
        }
    })
}

exports.updateSupportDetails = function (req, res) {
    Support.find({
        '_id': req.params.id,
    }, function (err, supportData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            supportData[0].whatsappNumber = req.body.whatsappNumber;
            supportData[0].emailId = req.body.emailId;
            supportData[0].openTimings = req.body.openTimings;
            supportData[0].save( function (err, footerDa) {
                if (err) {
                    console.log(err);
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    Support.find({}).select().exec(function (err, supportData) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while retreiving data'
                            })
                        } else {
            res.status(200).json(supportData);
                        }
                    })
                }
            })
        }
    });
}