const fixture = {
  "data":{
    "user":{
      "id": "cj1v70u0iplz00148t9tsvqpr",
      "name": "Robert DeLuca",
      "__typename":"User"
    }
  }
};

function pretenderRoutes() {
  this.post('https://api.graph.cool/simple/v1/behcets-tracker', function(request) {
    // debugger;
    return [
      200,
      { 'content-type': 'application/graphql' },
      JSON.stringify(fixture)
    ];
  });

  this.get('https://robdel12.auth0.com/user/ssodata/', function() {
    return [
      200,
      { 'content-type': 'application/javascript' },
      JSON.stringify({sso: false})
    ];
  });
}

export default pretenderRoutes;
