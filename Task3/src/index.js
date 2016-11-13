import fetch from 'isomorphic-fetch';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const __DEV__ = true;

const app = express();


app.use(cors());

//app.use(bodyParser.json());


app.use(function (req, res, next) {
  const arr = req.url.split('/');
  const routes = arr.filter((t) => {
    return t != "";
  });
  if (!(routes[0] == 'volumes')) {
    let last = pc;
    for (let i = 0; i < routes.length; i++) {
      if (last[routes[i]] === undefined) {
         res.status(404).send('Not found');
      } else {
        last = last[routes[i]];
      }
    }
    console.log(routes[routes.length - 1]);
    let id = {};

    res.status(200).json(last);
  }

  next();
});


const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';


let hdds;
let pc = {};
fetch(pcUrl)
  .then(async (res) => {
    pc = await res.json();
    console.log(pc);

  })
  .catch(err => {
    console.log('Чтото пошло не так:', err);
  });




app.get('/volumes', (req, res) => {
  let space = [];

  hdds = pc.hdd;
  hdds.forEach((hdd) => {
    if (space[hdd.volume] == undefined) {
      space[hdd.volume] = 0;
    }
    space[hdd.volume] += hdd.size;
  });
  let finalSpace = {};
  for (let i in space) {

    finalSpace["" + i] = space[i] + "B";

    console.log(finalSpace["" + i]);
  }
  try {
    res.status(200).json(
     finalSpace,
    );
  } catch (err) {
    console.log(err);
  }

});

app.listen(3000, function () {
  console.log('My app listening on port ' + 3000);
});
