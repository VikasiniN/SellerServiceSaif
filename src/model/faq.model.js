var mongoose = require('mongoose');
var FaqDetails = require('./faqDetails.model');

const FAQSchema = new mongoose.Schema({
    faqHeading: String,
    faqDetails: [FaqDetails]


});

const FAQ = mongoose.model('faq', FAQSchema);
module.exports = FAQ;