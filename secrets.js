const OAUTH = {
  fb: {
    clientID: process.env.FB_CLIENT,
    clientSecret: process.env.FB_SECRET
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: "http://home-court-advantage.herokuapp.com/oauth2callback"
  }
};

module.exports = OAUTH;