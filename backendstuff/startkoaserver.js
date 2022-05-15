const Koa = require("koa");
const BodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const Logger = require("koa-logger");

const serve = require("koa-static");
const mount = require("koa-mount");
const HttpStatus = require("http-status");
const mongo = require('koa-mongo')
const app = new Koa();
const PORT = '3001';

app.use(BodyParser());
app.use(Logger());

app.use(ctx => {
ctx.body = "hello"
});




app.use(mongo({
  uri: 'mongodb://localhost:27017', 
  max: 100,
  min: 1

}));

app.listen(PORT, function () {
    console.log("  Listening on port %s. Visit http://localhost:%s/", PORT, PORT);
});