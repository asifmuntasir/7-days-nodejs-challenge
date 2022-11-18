const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/headers', (req, res) => {
    res.set('Content-Type', 'text/plain');
    var s = '';
    for (var name in req.headers) {
        s += ': ' + req.headers[name] + '\n';
    }
    res.send(s);
});

app.listen(app.get('port'), () => {
    console.log('Server running on port ' + app.get('port'));
});