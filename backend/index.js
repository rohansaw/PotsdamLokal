const paginate = require('jw-paginate');

const express = require('express')

// example array of 150 items to be paged
let projects = [...Array(150).keys()].map(i => ({ id: (i + 1), title: 'Ökologischer Bauernhof: Ernte ' + (i + 1) }));


// creating an express instance
const app = express()
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const passport = require('passport')

/*
const pg = require('pg');
const pool = new pg.Pool({
user: 'sysadmin',
host: '127.0.0.1',
database: 'mywebstore',
password: '123',
port: '5432'});

pool.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  pool.end()
}); */

// getting the local authentication type
const LocalStrategy = require('passport-local').Strategy

app.use(bodyParser.json())

app.use(cookieSession({
    name: 'mysession',
    keys: ['vueauthrandomkey'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(passport.initialize());
app.use(passport.session());

let users = [
    {
      id: 1,
      name: "Peter",
      email: "user@email.com",
      password: "password"
    },
    {
      id: 2,
      name: "Emma",
      email: "emma@email.com",
      password: "password2"
    }
  ]

  app.post("/api/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return next(err);
      }
  
      if (!user) {
        return res.status(400).send([user, "Cannot log in", info]);
      }
  
      req.login(user, err => {
        res.send("Logged in");
      });
    })(req, res, next);
  });

  app.get("/api/logout", function(req, res) {
    req.logout();
    return res.send();
  });

  const authMiddleware = (req, res, next) => {
    if (!req.isAuthenticated()) {
      res.status(401).send('You are not authenticated')
    } else {
      return next()
    }
  }

  app.get("/api/user", authMiddleware, (req, res) => {
    let user = users.find(user => {
      return user.id === req.session.passport.user
    })
  
    console.log([user, req.session])
  
    res.send({ user: user })
  })

  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password"
      },
  
      (username, password, done) => {
        let user = users.find((user) => {
          return user.email === username && user.password === password
        })
  
        if (user) {
          done(null, user)
        } else {
          done(null, false, { message: 'Incorrect username or password'})
        }
      }
    )
  )

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    let user = users.find((user) => {
      return user.id === id
    })
  
    done(null, user)
  })

  // paged items route
app.get('/api/projects', (req, res, next) => {
  // get page from query params or default to first page
  const page = parseInt(req.query.page) || 1;
  console.log(req.query.page);

  // get pager object for specified page
  const pageSize = 15;
  const pager = paginate(projects.length, page, pageSize);

  // get page of items from items array
  const pageOfProjects = projects.slice(pager.startIndex, pager.endIndex + 1);

  // return pager object and current page of items
  return res.json({ pager, pageOfProjects });
});

app.post("/api/createProject/", (req, res, next) => {
  // ToDo: Dont use unshift for production, bad performance
  projects[0] = ({
    id: projects.length+1,
    title: req.body.title
  });
  console.log(projects);
  //Returnt man so wirklich, fühlt sich unschön an...
  return res.send("");
});

  app.listen(3000, () => {
    console.log("Example app listening on port 3000")
  })