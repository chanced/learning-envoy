import Koa from "koa";
import Router from "@koa/router";
import http from "http";

const router = new Router();

router.get("/api", async (ctx, next) => {
  ctx.body = {
    route: "/api",
    app: "api" + (process.env.APP_NAME || ""),
  };
  return next();
});

router.get("/api/test", async (ctx, next) => {
  ctx.body = {
    route: "/test",
    app: "api" + (process.env.APP_NAME || ""),
  };
});

const app = new Koa();

app.use(router.middleware());

const server = http.createServer(app.callback());

server.listen(7000, () => {});
