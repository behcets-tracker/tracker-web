const fixture = {
  "data":{
    "user":{
      "id": "123",
      "name": "Name Namerson",
      "__typename":"User"
    }
  }
};

function pretenderRoutes() {
  this.post('https://api.graph.cool/simple/v1/behcets-tracker', function(request) {
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
