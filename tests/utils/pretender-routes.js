import { mockServer } from 'graphql-tools';
import schema from './schema';
import gql from 'graphql-tag';

const backendMock = mockServer(schema, {
  User: () => ({
    emailAddress: 'namerson@example.com',
    displayName: '@namey',
    name: 'Name Namerson'
  }),
});

function pretenderRoutes() {
  this.post('https://api.graph.cool/simple/v1/behcets-tracker', function(request) {
    let JSONRequest = JSON.parse(request.requestBody);
    let query = `query ${JSONRequest.query}`;

    return backendMock.query(query).then((response) => {
      return [
        200,
        { 'content-type': 'application/graphql' },
        JSON.stringify(response)
      ];
    });
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
