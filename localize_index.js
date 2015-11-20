function buildStringContent(language) {
    // Welcome Info
    var welcome = $('#welcome-info').html('');
    welcome.append($('<h2>').text(language.welcome_info_welcome_header));
    welcome.append($('<p>').text(language.welcome_info_welcome_paragraph));
    welcome.append($('<h2>').text(language.welcome_info_we_love_header));
    welcome.append($('<p>').text(language.welcome_info_we_love_paragraph1));
    welcome.append($('<p>').text(language.welcome_info_we_love_paragraph2));
    welcome.append($('<h2>').text(language.welcome_info_try_sample_header));

    // Flavor Samples
    var flavor_days = $('.flavor-day');
    for (var i = 0; i < flavor_days.length; i++)
    {
        $(flavor_days[i]).find('.day-name').text(language.flavor_schedule[i].day);
        $(flavor_days[i]).find('.flavor-day-top>p:last-of-type').text(language.flavor_schedule[i].time);
        $(flavor_days[i]).find('.flavor-day-banner:first-of-type>p').text(language.flavor_schedule[i].flavor1);
        $(flavor_days[i]).find('.flavor-day-banner:last-of-type>p').text(language.flavor_schedule[i].flavor2);
    }
}