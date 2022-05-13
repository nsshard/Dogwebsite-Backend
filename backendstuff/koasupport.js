const Koa = require("koa");
const BodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const Logger = require("koa-logger");
const { resolve } = require('path');
const cors = require('koa-cors');
const serve = require("koa-static");
const mount = require("koa-mount");
const HttpStatus = require("http-status");

const app = new Koa();
const PORT = '3001';

app.use(BodyParser());
app.use(Logger());
app.use(cors());

const users = require(resolve(__dirname, 'routes', 'users'));
appr.use(mount('/users', users));

app.listen(PORT, function () {
    console.log("  Listening on port %s. Visit http://localhost:%s/", PORT, PORT);
});