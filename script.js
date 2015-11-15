$(document).ready(function(){
    $(".spanish").on('click', function(){
        var spanish = 'spanish';
        $.ajax({
            url: 'languages.xml',
            success: function(xml) {
                $(xml).find('translation').each(function(){
                    var id = $(this).attr('id');
                    var text = $(this).find(spanish).text();
                    $("." + id).html(text);
                });
            }
        });
        $("input[name='name']").attr('placeholder', 'el nombre');
        $("input[name='email']").attr('placeholder', 'el correo electrónico');
        $("input[name='phone']").attr('placeholder', 'el número de teléfono');
        $("input[name='subject']").attr('placeholder', 'el temae');
        $("textarea[name='message']").attr('placeholder', 'el mensaje');
        $("input[id='send']").attr('value', 'mandar');
    });
    $(".english").on('click', function(){
        var english = 'english';
        $.ajax({
            url: 'languages.xml',
            success: function(xml) {
                $(xml).find('translation').each(function(){
                    var id = $(this).attr('id');
                    var text = $(this).find(english).text();
                    $("." + id).html(text);
                });
            }
        });
        $("input[name='name']").attr('placeholder', 'Name');
        $("input[name='email']").attr('placeholder', 'Email');
        $("input[name='phone']").attr('placeholder', 'Phone');
        $("input[name='subject']").attr('placeholder', 'Subject');
        $("textarea[name='message']").attr('placeholder', 'Message');
        $("input[id='send']").attr('value', 'Send');
    });

});