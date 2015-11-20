function buildStringContent(language) {
    var lets_eat = $('#gp-lets-eat-section');
    lets_eat.find('h2').text(language.lets_eat_header);
    lets_eat.find('span').text(language.lets_eat_paragraph);

    var gift = $('#gp-gift-section');
    gift.find('h2').text(language.gifts_header);
    gift.find('p').text(language.gifts_paragraph);
    var gifts_ul = $('#gp-gift-section').find('ul').html('');
    for (var i = 0; i < language.gifts_list.length; i++) {
        gifts_ul.append($('<li>').text(language.gifts_list[i]));
    }
    gift.append(gifts_ul);

    var party = $('#gp-party-section');
    party.find('h2').text(language.party_header);
    party.find('p').text(language.party_paragraph);
    var party_ul = $('<ul>').html('');
    for (var i = 0; i < language.party_list.length; i++) {
        party_ul.append($('<li>').text(language.party_list[i]));
    }
};