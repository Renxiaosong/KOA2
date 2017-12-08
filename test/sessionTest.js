var session = require('koa-session-redis');
var koa = require('koa');
var app = new koa();
app.keys = ['test'];
app.use(session({
        store: {
            host: process.env.SESSION_PORT_6379_TCP_ADDR || '127.0.0.1',
            port: process.env.SESSION_PORT_6379_TCP_PORT || 6379,
            ttl: 3600,
        },
    },
));

app.use(function *(){
    var n = this.session.views || 0;
    this.session.views = ++n;
    this.body = n + ' views';
})

app.listen(3000);
console.log('listening on port 3000');