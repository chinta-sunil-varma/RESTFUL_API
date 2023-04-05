const express = require("express");
const bcrypt = require("bcrypt");
require('dotenv').config()
const database = require("../models/database");
const { mod1, mod2, mod3, auth_mod, api_model } = database;

const routes = express.Router();

routes.get("/check/:user/:pass", async (req, res) => {
  const user = req.params.user;
  const pass = req.params.pass;
  try {
    const obj = await auth_mod.findOne({ user: user });
    console.log(obj)
    bcrypt.compare(pass, obj.pass)
    .then((result) => {
        if(result==true)
        {return res.send({api:obj.api});
        
    }
    
    throw new Error("user name or password not correct"); 
    }).catch((err) => {
        res.send({'error':err})
    });
 
  } catch (error) {
    res.send({'error':'error processing your request'});
  }
});

routes.get("/register/:name/:pass", (req, res) => {
  const name = req.params.name;
  const pass = req.params.pass;
  auth_mod
    .findOne({ user: name })
    .then((result) => {
      if (result) {
        console.log("found one succesfully", result);
        return res.send({'error':"Accout Already Exists!"});
      }
      bcrypt.hash(pass, 10).then(function (hash) {
        // Store hash in your password DB.
        const api = pass + process.env.KEY;
        bcrypt
          .hash(api, 10)
          .then((result) => {
           result= result.replace('/','')
            auth_mod
              .insertMany({ user: name, pass: hash, api: result })
              .then((innerresult) => {
                api_model
                  .insertMany({ api: result })
                  .then((result) => {
                    console.log(result);
                    console.log("succsfuly inserted in api collecton");
                    res.send({'api':result[0].api});
                  })
                  .catch((err) => {
                    console.log("eroor procesing request-1", err);
                  });
              })
              .catch((err) => {
                res.send({'error':"Something error happened!"});
              });
          })
          .catch((err) => {
            res.send({'error':"problem has occured!"});
          });
      });
    })
    .catch((err) => {
      res.send({'error':"There is an error processing your request"});
    });
});

checker = (req, res, next) => {
  const key = req.params.key;

  api_model
    .findOne({ api: key })
    .then((result) => {
      if (result == null) {
        return res.send({'error':"api key is not valid check again"});
      }
      console.log("verified api here");
      next();
    })
    .catch((err) => {
      console.log("error occured", err);
    });
};

routes.get("/result/:sem/:id/:key", checker, (req, res) => {
  const sem = parseInt(req.params.sem);
  const id = parseInt(req.params.id);
  // console.log(mod.it1_sem1)
  if (sem == 1) {
    mod1
      .find({ ID: id })
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (sem == 2) {
    mod2
      .find({ ID: id })
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (sem == 3) {
    mod3
      .find({ ID: id })
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if ((sem > 3) | (sem < 1)) {
    res.send("DATA NOT FOUND");
  }
});

routes.use('*',(req, res) => {
  res.send({'error':"out of end points nothing here! view api documentation for valid routes https://github.com/chinta-sunil-varma/RESTFUL_API"});
  // res.render('index.ejs')
});

module.exports = routes;
