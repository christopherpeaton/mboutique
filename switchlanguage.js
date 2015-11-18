/**
 * Created by michpenn on 11/17/15.
 */
var english;
var hebrew;
var indexPage;
var ourMacaronsPage;
var giftsPartiesPage;
var contactPage;

function checkLanguage() {
    console.log("document.URL : ", document.URL);
    var start = document.URL.lastIndexOf("/") + 1;
    var end = document.URL.length - 1;
    var filename = String((document.URL.substr(start, end)));
    if (filename == 'index_english.html#') {
        english = true;
        hebrew = false;
    }
    if (filename == 'index_hebrew.html#') {
        english = false;
        hebrew = true;
    }
}

function changeLanguage(language) {
    console.log(language);
    if (language == 'american_english') {
        console.log('we need to switch to english');
        english = true;
        hebrew = false;
    }
    if (language == 'hebrew') {
        console.log('we need to switch to hebrew');
        hebrew = true;
        english = false;
    }
    var i, link_tag;
    for (i = 0, link_tag = document.getElementsByTagName('link'); i < link_tag.length; i++) {
        console.log(link_tag[i], ((link_tag[i].rel.indexOf('stylesheet') != -1)) && (link_tag[i].title).length > 1);
        if (((link_tag[i].rel.indexOf('stylesheet') != -1)) && (link_tag[i].title).length > 1) {
            //deactivates the current style sheet
            if ((hebrew) && link_tag[i].title == 'english') {
                console.log('deactivate english and make hebrew appear');
                link_tag[i].disabled = true;
            }
            if ((english) && link_tag[i].title == 'hebrew') {
                console.log('deactivate hebrew and go with english');
                link_tag[i].disabled = true;
            }
        }
        if ((link_tag[i].disabled) && (hebrew)) {
            console.log('this was disabled');
            loadIndex();
        }

        if ((link_tag[i].disabled) && (english)) {
            console.log('this was disabled');
        }


    }
    translatePage();
}

function translatePage() {
    if (indexPage) {
        loadHome()
    }
    else if (ourMacaronsPage) {
        loadOurMacarons();
    }
    else if (giftsPartiesPage) {
        loadGiftsParties();
    }
    else if (contactPage) {
        loadContact();
    }
}


function loadOurMacarons() {
    console.log('function to load our macarons page');
    ourMacaronsPage = true;
    indexPage = false;
    contactPage = false;
    giftsPartiesPage = false;
    if ((english) && (ourMacaronsPage)) {
        $('#body_content').load('our_macarons_english.html');
    }
    if ((hebrew) && (ourMacaronsPage)) {
        $('#body_content_hebrew').load('our_macarons_hebrew.html');
    }


}

function loadGiftsParties() {
    console.log('function to load gifts & parties page');
    ourMacaronsPage = false;
    indexPage = false;
    contactPage = false;
    giftsPartiesPage = true;
    if ((english) && (giftsPartiesPage)) {
        $('#body_content').load('gifts_parties_english.html');
    }
    if ((hebrew) && (giftsPartiesPage)) {
        $('#body_content_hebrew').load('gifts_parties_hebrew.html');
    }
}

function loadContact() {
    console.log('function to load contact page');
    ourMacaronsPage = false;
    indexPage = false;
    contactPage = true;
    giftsPartiesPage = false;
    if ((english) && (contactPage)) {
        $('#body_content').load('contact_english.html');
    }
    if ((hebrew) && (contactPage)) {
        $('#body_content_hebrew').load('contact_hebrew.html');
    }
}

function loadHome() {
    console.log('function to load home page');
    ourMacaronsPage = false;
    indexPage = true;
    contactPage = false;
    giftsPartiesPage = false;
    if ((english) && (indexPage)) {
        $('#body_content').load('index_english_content.html');
    }
    if ((hebrew) && (indexPage)) {
        $('#body_content_hebrew').load('index_hebrew_content.html');
    }
}

function loadIndex() {
    if (english) {
    $('body').load('languages/english/index_english.html');
    }
    if (hebrew) {
        $('body').load('languages/hebrew/index_hebrew.html');
    }
}

function loadBody() {
    var url = document.URL;
    var isThereEnglish = url.indexOf('english');
    var isThereHebrew = url.indexOf('hebrew');
    console.log(isThereEnglish, isThereHebrew);
    if ((isThereEnglish == -1) && (isThereHebrew == -1)) {
        console.log('load english');
        english = true;
        hebrew = false;
    }
    if ($('body').length < 2) {
        console.log('here we can load the index');
        loadIndex();
    }
}




$(document).ready(function () {
    loadBody();
    //checkLanguage();
    //if (english) {
    //    if ($('#body_content').is(':empty')) {
    //        loadHome();
    //    }
    //}
    //else {
    //    if ($('#body_content_hebrew').is(':empty')) {
    //        loadHome();
    //    }
    //}


});