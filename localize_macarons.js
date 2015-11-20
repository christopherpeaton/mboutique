function buildStringContent(language) {
    var our_macarons = $('#our-macarons-section').html('');
    our_macarons.append($('<h2>').text(language.our_macarons_header));
    our_macarons.append($('<p>').text(language.our_macarons_paragraph));

    var classics = $('#classics-section').html('');
    classics.append($('<h2>').text(language.classics_header));
    var flavors_list = $('<ul>');
    for (var i = 0; i < language.classics_flavors.length; i++)
    {
        flavors_list.append($('<li>').text(language.classics_flavors[i]));
    }
    classics.append(flavors_list);

    var recommendations = $('#recommendation-section').html('');
    recommendations.append($('<p>').text(language.recommendations_paragraph));
};