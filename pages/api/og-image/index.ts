import { IncomingMessage, ServerResponse } from "http";
import { parseRequest } from "./_lib/parser";
import { getScreenshot } from "./_lib/chromium";
import { getHtml } from "./_templates/base";
import { getWorkHtml, workCss } from "./_templates/work";
import { getBlogHtml, blogCss } from "./_templates/blog";
import { getDefaultHtml, defaultCss } from "./_templates/default";

const isDev = process.env.NODE_ENV === "development";

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  try {
    const parsedReq = parseRequest(req);
    let innerHtml: string;
    let innerCss: string;
    if (parsedReq.type === "work") {
      innerHtml = getWorkHtml(parsedReq);
      innerCss = workCss;
    } else if (parsedReq.type === "blog") {
      innerHtml = getBlogHtml(parsedReq);
      innerCss = blogCss;
    } else {
      innerHtml = getDefaultHtml(parsedReq);
      innerCss = defaultCss;
    }
    const html = getHtml(innerHtml, innerCss);
    if (isDev && parsedReq.debug === "1") {
      res.setHeader("Content-Type", "text/html");
      res.end(html);
      return;
    }
    const file = await getScreenshot(html, isDev);
    res.statusCode = 200;
    res.setHeader("Content-Type", `image/png`);
    res.setHeader(
      "Cache-Control",
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
    );
    res.end(file);
  } catch (e) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Internal Error</h1><p>Sorry, there was a problem</p>");
    console.error(e);
  }
}
