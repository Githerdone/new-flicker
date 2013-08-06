$(document).ready(function() {

  $('#create_li').on('click', function(e){
    e.preventDefault();
    reset_create();
    $("#createModal").modal('show');
  });
    $('#new_user').on('submit', function(e){
      e.preventDefault();

      var form_input = $(this).serializeArray();
      var validation = validate_input_data(form_input[2].value, form_input[3].value, form_input[4].value);
      console.log(form_input);
      console.log(validation);
      if (validation.email && validation.password && validation.verify){
        form_input.pop();
        console.log(form_input);
        $.post('/users', form_input).done(function(response){
          console.log('here');
          console.log(response);
        });
        reset_create();
        $("#createModal").modal('hide');
        location.reload();
      }else{
        if (!validation.email){
          render_error('email');
        }
        if (!validation.password){
          render_error('password');
        }
        if (!validation.verify){
          render_error('verify');
        }
      }
    });
  
});

function validate_input_data(email, password, verify){
  console.log(email)
  console.log(password)
  console.log(verify)
  var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
  var passwordlength = password.length >= 6;
  var verify_password = password == verify
  return { email: emailRegex.test(email), password: passwordlength, verify: verify_password}
};

function render_error(item){
  if (item == 'email'){
    $("[for=user_email] span").css('color', 'red').text(' - incorrect format');
  }
  if (item == 'password'){
    $("[for=user_password] span").css('color', 'red').text(' - not long enough');
  }
  if (item == 'verify'){
    $("[for=user_password_confirmation] span").css('color', 'red').text(' - does not match');
  }
};

function reset_create(){
  $('#new_user label span').text('');
  $("#new_user")[0].reset();
  $('#email').focus();
};