import 'dotenv/config';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: (operation) => {
    headers: {
      authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`;
    }
  },
});

const userCredentials = { firstname: 'Elliot' };
const userDetails = { nationality: 'Scottish' };

const user = {
  ...userCredentials,
  ...userDetails,
};

console.log(user);

console.log(process.env.SOME_ENV_VARIABLE);
