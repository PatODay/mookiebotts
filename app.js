'use strict'
// Requiring twitter package
const TwitterPackage = require('twitter');
// Creating a JS object containing keys/tokens associated with this account
const keys = {
	consumer_key: process.env.CONSUMER_KEY,
	consumer_secret: process.env.CONSUMER_SECRET,
	access_token_key: process.env.ACCESS_TOKEN_KEY,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET
}

const Twitter = new TwitterPackage(keys);

Twitter.post('statuses/update', {status: 'Testing'},  function(error, tweet, response){
  if(error){
    console.log(error);
  }
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
});
