function loginFunction(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if(username == ""){
    document.getElementById('status').innerHTML = 'Please enter a Username';
  }else{
    if(password == ""){
      document.getElementById('status').innerHTML = 'Please enter a Password';

    }else{

      var data = encodeVariables({
        username: username,
        password: password
      });

      var callback = {
        success: function(xmlRequest){
          window.location = "account.php?username="+xmlRequest.responseText;
        },
        failure: function(xmlRequest){
          document.getElementById('status').innerHTML = 'An error has occured.';
        }
      }

      makeAJAXRequest('login.php?' + data, callback);

    }
  }
}
