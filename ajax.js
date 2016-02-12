function makeAJAXRequest(url, callback, method, postData, dataType){
  //This variable will hold the xml request required for AJAX.
  var xmlRequest = createXMLHttpRequestObject();

  //assign default values to the (method, postData and dataType) arguments.
  method = method || 'GET';
  postData = postData || null;
  dataType = dataType || 'text/plain';

  //passes the method to the PHP url we are using.
  xmlRequest.open( method, url);

  //Sets the content type of the data we are sending to the PHP file.
  xmlRequest.setRequestHeader('Content-Type', dataType);

  xmlRequest.onreadystatechange = function() {
    if (xmlRequest.readyState === 4){
      if (xmlRequest.status === 200) {
        callback.success(xmlRequest);
      } else {
        callback.failure(xmlRequest);
      }
    }
  }
  //send the AJAX request.
  xmlRequest.send(postData);

  //returns the AJAX request object;
  return xmlRequest;
}

//This function creates the xml request for AJAX.
function createXMLHttpRequestObject(){
  var xmlHttp;

  //if the browser is IE.
  if(window.ActiveXObject){
    try{
      xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }catch(e){
      xmlHttp = false;
    }
    //for all other current browsers such as chrome and firefox.
  }else{
    try{
      xmlHttp = new XMLHttpRequest();
    }catch(e){
      xmlHttp = false;
    }
  }
  //should any problems occur display this message.
  if(!xmlHttp){
    alert("AJAX request could not be created.");
  }else{
    return xmlHttp;
  }
}

//build a string seperating name from value creating (name, value) pairs.
function encodeVariables(params){
  var string = '';
  for (i in params) {
    string += encodeURIComponent(i) + '=' + encodeURIComponent( params[i]) + '&';
  }
  return string.slice(0,-1);
}
