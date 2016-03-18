const OAUTH = {
  fb: {
    clientID: FB_CLIENT,
    clientSecret: FB_SECRET
  },
  google: {
    clientID: GOOGLE_CLIENT,
    clientSecret: GOOGLE_SECRET,
    callbackURL: "http://home-court-advantage.herokuapp.com/oauth2callback"
  }
};

module.exports = OAUTH;
