/**
 * Created by michpenn on 11/17/15.
 */
var english;
var hebrew;
var indexPage;
var ourMacaronsPage;
var giftsPartiesPage;
var contactPage;

//changes languages
function changeLanguage(language) {
    if (language == 'american_english') {
        console.log('we need to switch to english');
        english = true;
        hebrew = false;
        loadIndex();
    }
    if (language == 'hebrew') {
        console.log('we need to switch to hebrew');
        hebrew = true;
        english = false;
        loadIndex();
    }

}

//disables and enables the language stylesheets
function disableStylesheet() {
    console.log('step 3- a stylesheet was disabled');
    var i, link_tag;
    for (i = 0, link_tag = document.getElementsByTagName('link'); i < link_tag.length; i++) {
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
        //enables the needed stylesheet if it is disabled
        if ((link_tag[i].disabled) && (link_tag[i].title == 'hebrew') && (hebrew)) {
            console.log('this was disabled and we now need hebrew');
            link_tag[i].disabled = false;
        }

        if ((link_tag[i].disabled) && (link_tag[i].title == 'english') && (english)) {
            console.log('this was disabled and we now need english');
            link_tag[i].disabled = false;
        }

    }
}

//checks language, this helps with translation
function checkPage() {
    if (ourMacaronsPage) {
        loadOurMacarons();
        console.log('Step 5- our macarons should load');
    }
    else if (giftsPartiesPage) {
        loadGiftsParties();
        console.log('Step 5- gift parties should load');
    }
    else if (contactPage) {
        loadContact();
        console.log('Step 5- contact page should load');
    }
    else {
        loadHome();
        console.log('Step 5 Completed- home page should load');
    }
}

//loads our macarons page
function loadOurMacarons() {
    console.log('function to load our macarons page');
    ourMacaronsPage = true;
    indexPage = false;
    contactPage = false;
    giftsPartiesPage = false;
    if ((english) && (ourMacaronsPage)) {
        $('#body_content').load('languages/english/our_macarons_english.html');
    }
    if ((hebrew) && (ourMacaronsPage)) {
        $('#body_content_hebrew').load('languages/hebrew/our_macarons_hebrew.html');
    }


}
//loads gifts & parties page
function loadGiftsParties() {
    console.log('function to load gifts & parties page');
    ourMacaronsPage = false;
    indexPage = false;
    contactPage = false;
    giftsPartiesPage = true;
    if ((english) && (giftsPartiesPage)) {
        $('#body_content').load('languages/english/gifts_parties_english.html');
    }
    if ((hebrew) && (giftsPartiesPage)) {
        $('#body_content_hebrew').load('languages/hebrew/gifts_parties_hebrew.html');
    }
}

//loads contact form page
function loadContact() {
    console.log('function to load contact page');
    ourMacaronsPage = false;
    indexPage = false;
    contactPage = true;
    giftsPartiesPage = false;
    if ((english) && (contactPage)) {
        $('#body_content').load('languages/english/contact_english.html');
    }
    if ((hebrew) && (contactPage)) {
        $('#body_content_hebrew').load('languages/hebrew/contact_hebrew.html');
    }
}

//loads the home page content
function loadHome() {
    ourMacaronsPage = false;
    indexPage = true;
    contactPage = false;
    giftsPartiesPage = false;
    if ((english) && (indexPage)) {
        $('#body_content').load('languages/english/index_english_content.html');
        console.log('the english home page conditions are met');
    }
    if ((hebrew) && (indexPage)) {
        $('#body_content_hebrew').load('languages/hebrew/index_hebrew_content.html');
        console.log('the hebrew home page conditions are met');
    }
}
//Loads the header and footer that goes with the language
function loadIndex() {
    disableStylesheet();
    if (english) {
        $('body').load('languages/english/index_english.html', function () {
            checkPage();
        });
    }
    if (hebrew) {
        $('body').load('languages/hebrew/index_hebrew.html', function () {
            checkPage();
        });
    }
}

//Sets default language to English
function loadBody() {
    var url = document.URL;
    var isThereEnglish = url.indexOf('english');
    var isThereHebrew = url.indexOf('hebrew');
    //console.log(isThereEnglish, isThereHebrew);
    if ((isThereEnglish == -1) && (isThereHebrew == -1)) {
        english = true;
        hebrew = false;
    }
    if ($('body').length < 2) {
        loadIndex();
    }
}


$(document).ready(function () {
    loadBody();

});