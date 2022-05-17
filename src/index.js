import 'dotenv/config';

const userCredentials = { firstname: 'Elliot' };
const userDetails = { nationality: 'Scottish' };

const user = {
  ...userCredentials,
  ...userDetails,
};

console.log(user);

console.log(process.env.SOME_ENV_VARIABLE);
