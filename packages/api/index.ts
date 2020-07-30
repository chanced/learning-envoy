import Koa from "koa";
import Router from "@koa/router";
import http from "http";
const router = new Router();

router.get("/", async (ctx, next) => {
  ctx.body = {
    route: "/",
    app: "api" + (process.env.APP_NAME || ""),
  };
  return next();
});

router.get("/test", async (ctx, next) => {
  ctx.body = {
    route: "/test",
    app: "api" + (process.env.APP_NAME || ""),
  };
});

const app = new Koa();

app.use(router.middleware());

const server = http.createServer(app.callback());

server.listen(7000, () => {
  console.log("http://localhost:7000");
});
