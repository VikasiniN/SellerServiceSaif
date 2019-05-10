
var Terms = require('../../model/termsuse.model');



exports.createTerms = function (req, res) {
    var terms = new Terms(req.body);
    terms.save(function (err, data) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while saving data'
            })
        } else {
            Terms.find({}).select().exec(function (err, termsData) {
                if (err) {
                    res.status(500).send({
                        "result": 'error occured while retreiving data'
                    })
                } else {
                    res.status(200).json(termsData);
                }
            })
        }
    })
}

exports.getTerms = function (req, res) {
    Terms.find({}).select().exec(function (err, termsData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            res.status(200).json(termsData);
        }
    })
}

exports.deleteTerms = function (req, res) {
    Terms.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {

            Terms.find({}).select().exec(function (err, termsData) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {

                    res.status(200).json(termsData);
                }
            });


        }
    });
}


exports.updateTerms = function (req, res) {
    Terms.find({
        '_id': req.params.id,
    }, function (err, termdata) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            termdata[0].heading = req.body.heading;
            termdata[0].details = req.body.details;
            termdata[0].save( function (err, result) {
                if (err) {
                    console.log(err);
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    Terms.find({}).select().exec(function (err, termsData) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while retreiving data'
                            })
                        } else {
            res.status(200).json(termsData);
                        }
                    })
                }
            })
        }
    });
}