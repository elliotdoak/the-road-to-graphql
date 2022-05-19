import 'dotenv/config';
import 'cross-fetch/polyfill';
import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    });
  },
});

const GET_REPO_OF_ORG = gql`
  query ($org: String!) {
    organization(login: $org) {
      name
      url
      repositories(first: 5) {
        edges {
          node {
            name
            url
          }
        }
      }
    }
  }
`;

client
  .query({
    query: GET_REPO_OF_ORG,
    variables: { org: 'the-road-to-learn-react' },
  })
  .then(console.log);

const userCredentials = { firstname: 'Elliot' };
const userDetails = { nationality: 'Scottish' };

const user = {
  ...userCredentials,
  ...userDetails,
};

// console.log(user);

// console.log(process.env.SOME_ENV_VARIABLE);
