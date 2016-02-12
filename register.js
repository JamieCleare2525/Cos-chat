function register_function(){
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var firstname = document.getElementById("first_name").value;
  var lastname = document.getElementById("last_name").value;
  var dob = document.getElementById("dob").value;
  var string_dob = dob.toString();
  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("confirm_password").value;
  var county_state = document.getElementById("county_state").value;
  var country = document.getElementById("country").value;

  if (password == confirm_password)
  {
    var callback = {
      success: function(xmlRequest){
        document.getElementById('result').innerHTML = xmlRequest.responseText;
      },
      failure: function(xmlRequest){
        document.getElementById('result').innerHTML = 'An error has occured.';
      }

    }

    // creates the varaible to pass the data to the PHP file.
    var data = encodeVariables( {username:username,
      email:email,
      first_name:firstname,
      last_name:lastname,
      dob:string_dob,
      password:password,
      county_state: county_state,
      country: country
    })

    var dataType = 'application/x-www-form-urlencoded';

    makeAJAXRequest('register.php', callback, 'POST', data, dataType);
  } else {
    document.getElementById('result').innerHTML = 'Password does not match Confirm Password';
  }

}
