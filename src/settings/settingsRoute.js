'use strict';
var adsMgr  = require('./ads/adsMgr');
var bannersMgr = require('./banner/bannerMgr');
var promotionsMgr = require('./promotions/promotionsMgr');
var footerMgr = require('./footer/footerMgr');
var supportMgr = require('./support/supportMgr');
var contactUsMgr = require('./contact-us/contactUsMgr');
var privacyPolicyMgr = require('./privacy-policy/privacyPolicyMgr');
var faqMgr = require('./faqs/faqMgr');
var termsAndUseMgr = require('./terms-use/termsAndUseMgr');

module.exports = function(app) {

    // ads 
    app.route('/ads/:position')
    .put(adsMgr.createAds);

    app.route('/deleteads/:id')
    .delete(adsMgr.deleteAds);

    app.route('/ads')
    .get(adsMgr.getAds);

    // banners

    app.route('/banners/:position')
    .put(bannersMgr.createBanners);

    app.route('/deletebanners/:id')
    .delete(bannersMgr.deleteBanners);

    app.route('/banners')
    .get(bannersMgr.getBanners);

    // promotions
    app.route('/promotions')
    .post(promotionsMgr.createPromotions);

    app.route('/deletepromotions/:id')
    .delete(promotionsMgr.deletePromotions);

    app.route('/promotions')
    .get(promotionsMgr.getPromotions);

    app.route('/editpromotions/:id')
    .put(promotionsMgr.editPromotions);

    // footer

    app.route('/footer')
    .post(footerMgr.createFooter);

    app.route('/createLogoImage/:id')
    .put(footerMgr.createLogoImage);


    app.route('/footerDetails')
    .get(footerMgr.getFooterDetails);

    app.route('/details/:id')
    .put(footerMgr.updateFooterDetails);

    // support

 app.route('/support')
    .post(supportMgr.createSupport);

    app.route('/supportDetails')
    .get(supportMgr.getSupportDetails);

    app.route('/supportdetails/:id')
    .put(supportMgr.updateSupportDetails);

    // contact -us

    app.route('/contactus')
    .post(contactUsMgr.createContactUs);

    app.route('/contactDetails')
    .get(contactUsMgr.getContactDetails);

    app.route('/contactdetails/:id')
    .put(contactUsMgr.updateContactDetails);


    // privacy policy

  

    app.route('/privacypolicy')
    .post(privacyPolicyMgr.createPrivacyPolicy);

     app.route('/privacypolicy')
    .get(privacyPolicyMgr.getPrivacyPolicy);

   app.route('/editprivacypolicy/:id')
    .put(privacyPolicyMgr.updatePrivacyPolicy); 

    // faq 

    app.route('/faq')
    .post(faqMgr.createFAQ);

    app.route('/faq')
    .get(faqMgr.getFAQ);

    app.route('/singlefaq/:id')
    .get(faqMgr.getSingleFAQ);

    app.route('/faq/:faqId')
    .delete(faqMgr.deleteFAQ);

    app.route('/editFAQ/:id')
    .put(faqMgr.updateFAQ); 

    // terms

    app.route('/termsanduse')
    .post(termsAndUseMgr.createTerms);

    app.route('/termsanduse')
    .get(termsAndUseMgr.getTerms);

    app.route('/terms/:id')
    .delete(termsAndUseMgr.deleteTerms);

    app.route('/editTerms/:id')
    .put(termsAndUseMgr.updateTerms);

     
}