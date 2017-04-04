
$(document).ready(function() {
    $('login').submit(function(event) {

        // get the form data
        var formData = {
            'username': $('input[name=username]').val(),
            'password': $('input[name=password]').val()};

        // process the form
        $.ajax({
            type: 'POST',
            url: 'php/login.php', // the url where we want POST
            data: formData, // our data object
            dataType: 'json', //type data
		        encode: true
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                console.log(data);

                // here we will handle errors and validation messages

                if(data.success) {
                  document.getElementById('main-login').style.display = "none";
                  document.getElementById('main-tutorial').style.display = "block";
                  document.getElementById('main-selections').style.display = "none";
                } else {

                if(data.errors.username) {
                  document.getElementById('username').style.borderColor = "#ff0000";
                }

                if(data.errors.password) {
                  document.getElementById('password').style.borderColor = "#ff0000";
                }
              }
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});
