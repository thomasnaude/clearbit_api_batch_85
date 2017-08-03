$(document).ready(function(){
  $('#form-email').on('submit', function(event){
    event.preventDefault();
    var email = $('#email').val();
    $.ajax({
      type: "GET",
      headers: { "Authorization": "Bearer ENTER YOUR API KEY HERE" }, // enter your api key here
      url: "https://person.clearbit.com/v2/combined/find?email=" + email,
      success: function(data){
        console.log(data);
        if (data.error == undefined ){
          var name = data.person.name.fullName;
          var job = data.person.employment.title;
          var photo = data.person.avatar;
          var bio = data.person.bio;

          $('.card').removeClass('hide');

          $('.name').html(name);
          $('.job').html(job);
          $('.photo').attr("src", photo);
          $('.card-body').html(bio);
        } else {
          $('.card').addClass('hide');
          $('.error-message').html("Error: cet email est inconnu.");
        }
      }
    })


  });






})
