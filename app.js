var student = [{
  name: "no1",
  chinese: '98',
  math: '90',
  English:'80'
}, {
  name: "no2",
  chinese: '78',
  math: '80',
  English:'84'
}, {
  name: "no3",
  chinese: '68',
  math: '98',
  English:'97'
}, {
  name: "no4",
  chinese: '87',
  math: '90',
  English:'70'
}, {
  name: "no5",
  chinese: '88',
  math: '53',
  English:'80'
}, {
  name: "no6",
  chinese: '99',
  math: '94',
  English:'98'
}, {
  name: "no7",
  chinese: '85',
  math: '85',
  English:'60'
}, {
  name: "no8",
  chinese: '73',
  math: '89',
  English:'90'
}, {
  name: "no9",
  chinese: '86',
  math: '71',
  English:'100'
}, {
  name: "no10",
  chinese: '77',
  math: '74',
  English:'90'
}, {
  name: "no11",
  chinese: '97',
  math: '91',
  English:'60'
}, {
  name: "no12",
  chinese: '74',
  math: '96',
  English:'58'
}, {
  name: "no13",
  chinese: '85',
  math: '86',
  English:'65'
}, {
  name: "no14",
  chinese: '97',
  math: '70',
  English:'77'
}, {
  name: "no15",
  chinese: '78',
  math: '56',
  English:'86'
}, {
  name: "no16",
  chinese: '58',
  math: '78',
  English:'84'
}, {
  name: "no17",
  chinese: '96',
  math: '67',
  English:'87'
}, {
  name: "no18",
  chinese: '76',
  math: '65',
  English:'68'
}, {
  name: "no19",
  chinese: '68',
  math: '88',
  English:'94'
}, {
  name: "no20",
  chinese: '38',
  math: '100',
  English:'83'
}];
var express = require('express');
var app = express();
var hbs = require('hbs');
app.use(express.static('node_modules'));
app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.get('/', function(req, res) {
  res.render('hello', {
    student: student
  });
});
var server = app.listen(3000, function() {
  console.log("app listen ");
});
