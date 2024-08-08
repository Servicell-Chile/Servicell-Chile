const express = require('express');
const app = express();
const passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, (link unavailable));
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

app.post('/login', passport.authenticate('local'), (req, res) => {
  res.redirect('/');
});
```