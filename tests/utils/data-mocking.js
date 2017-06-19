import { mockServer } from 'graphql-tools';
import schema from './schema';

/**
 * Create a mock graphQL server client side when testing
 *
 * This is where we can define what we want to return from the mock
 * server we create for testing.
 *
 * @param { graphQL } schema - the APIs schema
 * @param { object } resolver - custom resolver for the server
 */
const backendMock = mockServer(schema, {
  User: () => ({
    emailAddress: 'namerson@example.com',
    displayName: '@namey',
    name: 'Name Namerson',
    symptoms: [
      {
        name: 'Mouth ulcers',
        description: 'Painful mouth ulcers make it difficult to eat',
        questions: [
          'What are they?',
          'How did they get there?'
        ]
      }
    ]
  }),
});

/**
 * Intercept the API end points our application talks to during
 * testing.
 *
 * This allows us to return whatever we want from XHR requests.
 *
 * @function
 */
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
