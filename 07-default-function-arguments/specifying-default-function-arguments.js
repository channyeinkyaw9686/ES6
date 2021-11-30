function makeAjaxRequest(url, method) {
  if (!method) {
    method = 'GET';
  }

  // logic to make the request
}

// ###
function makeAjaxRequestNew(url, method = 'GET') {
  return method;

  // logic to make the request
}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', null);
makeAjaxRequest('google.com', 'POST');
