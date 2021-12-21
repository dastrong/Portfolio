import { IncomingMessage, ServerResponse } from "http";
import { parseRequest } from "./_lib/parser";
import { getScreenshot } from "./_lib/chromium";
import { getHtml } from "./_templates/base";
import { getBlogHtml, blogCss } from "./_templates/blog";

const isDev = process.env.NODE_ENV === "development";

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  try {
    const parsedReq = parseRequest(req);
    console.log(parsedReq);
    const blogHtml = getBlogHtml(parsedReq);
    const html = getHtml(blogHtml, blogCss);
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
