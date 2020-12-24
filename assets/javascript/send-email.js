console.log('connected to the thunderdome')

// let contactForm = $("#contact-form")




$('#contact-form').submit(function (event){
    event.preventDefault();

    var data = {
        service_id: 'service_tyix8du',
        template_id: 'duarte-real-estate',
        user_id: 'user_n0ZXlyXiFHLSvNhfhMQHr',
        template_params:{
            'firstName': $('#first-name').val(),
            'lastName': $('#last-name').val(),
            'phone': $('#phone').val(),
            'email': $('#email').val(),
            'looking': $('#reason').val(),
            'message': $('#message').val()
        }
        
    }
    console.log('data my G', data , 'templat params', data.template_params)

    //email js code
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
    }).done(function() {
        alert('Your mail is sent!');
        }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
})

