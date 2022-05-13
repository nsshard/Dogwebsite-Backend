const Koa = require('koa');
const Router = require('@koa/router');
const koaBody = require('koa-body');
const users = new Koa();
const userRouter = new Router();

userRouter
  .get('/', ctx => {
    console.log('Get all users');
  })
  .get('/:id', ctx => {
    const { id } = ctx.params;
    console.log(`Get user with id ${id}`);
  })
 
users.use(userRouter.routes());
users.use(userRouter.allowedMethods());

module.exports = users;

