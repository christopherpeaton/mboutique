function buildStringContent(language) {
    var visit_us = $('#cu-visit-us');
    visit_us.find('h2').text(language.visit_us_header);
    var vu_paragraphs = visit_us.find('p');
    for (var i = 0; i < vu_paragraphs.length; i++) {
        $(vu_paragraphs[i]).text(language.visit_us_paragraphs[i]);
    }

    // Contact Form
    var contact = $('#cu-contact-form');
    contact.find('h2').text(language.contact_form_header);
    var labels = contact.find('p');
    for (var i = 0; i < labels.length; i++)
    {
        $(labels[i]).text(language.contact_form_labels[i]);
    }
    contact.find('input[type=submit]').val(language.contact_form_button);
};
