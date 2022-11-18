const express = require('express');
const app = express();
var handlebars = require('express-handlebars')
    .create({ defaultLayout: 'main' });
require('dotenv').config();

app.set('port', process.env.PORT || 3000);

var fortunes = [
    'Conqure your fears or they will conqure you.',
    'Rivers need springs',
    'Do not fear what you dont know',
    'You will have a pleasant surprise',
    'Whenever possible, keep it simple'
]

// custom 404 page
// app.use((req, res, next) => {
//     res.type('text/plain');
//     res.status(404);
//     res.send('404 - Not Found');
// });

// app.get('/', (req, res) => {
//     res.type('text/plain')
//     res.send('Meadowlark Travel')
// });

// app.get('/about', (req, res) => {
//     res.type('text/plain')
//     res.send('About Meadowlark Travel')
// });

// app.use((req, res, next) => {
//     res.type('text/plain');
//     res.status(404);
//     res.send('404 - Not Found');
// });


app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    var randomFortune =
        fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', { fortune: randomFortune });
});

// 404 catch-all handler (middleware)
app.use((req, res, next) => {
    res.status(404);
    res.render('404');
});

// 500 error handler (middleware)
app.use((req, res, next) => {
    console.error(err.stack);
    res.status(500);
    res.render('500');
})



app.listen(app.get('port'), () => {
    console.log('Server running on port ' + app.get('port'));
});