const Router = require("koa-router");
const errorHandler = require("../core/middleware/error");
const credsRouter = require("./creds");
const likesRouter = require("./likes");

module.exports = new Router()
  .use(errorHandler)
  .use(credsRouter.allowedMethods())
  .use(credsRouter.routes())
  .use(likesRouter.allowedMethods())
  .use(likesRouter.routes());
