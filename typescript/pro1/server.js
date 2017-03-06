var koa = require('koa');
var webpack = require('webpack');
var server = require('koa-serve-static');
var koaMiddleware = require('koa-webpack');
var config = require('./webpack.config.js');

var app = new koa();
var compiler = webpack(config);

app.use(koaMiddleware({config}));
app.use(server('.'));
// app.use(hotMiddleWare(compiler));
// app.use(async function (ctx, next){
//   await send(ctx, ctx.path);
// });

app.listen(3000);
