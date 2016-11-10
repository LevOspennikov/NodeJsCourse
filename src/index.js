import express from 'express';
import cors from 'cors';
import canonizeName from './canonizeName';
import canonizeNickname from './canonize';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2A', (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const sum = (a || 0) + (b || 0);

  res.send(sum.toString());
});

app.get('/task2B', (req, res) => {
  const name = req.query.fullname;
  const canonicalName = canonizeName(name);
  console.log(canonicalName);
  res.send(canonicalName);
});


app.get('/task2C', (req, res) => {
  const url = req.query.username ;
  const canonicalName = canonizeNickname(url);
  console.log(canonicalName);
  res.send('@' + canonicalName);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
