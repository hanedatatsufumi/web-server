const express = require('express')
const path = require('path');
const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function (req, res) {
//   res.send('<h1>TOPページ!!</h1>')
// });

app.post('/api/v1/quiz', function (req, res) {
  const answer = req.body.answer;
  if(answer === '2') {
    // res.send('<h1>正解です！</h1>');
    res.redirect('/correct.html');
  }else{
    // res.send('<h1>不正解です！</h1>');
    res.redirect('/wrong.html');
  };
});

app.get('/api/v1/users', function (req, res) {
  res.send({
    name: '太郎',
    age: 30,
  })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
