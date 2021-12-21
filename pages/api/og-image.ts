import { IncomingMessage, ServerResponse } from "http";
import { parseRequest } from "utils/og-image/_lib/parser";
import { getScreenshot } from "utils/og-image/_lib/chromium";
import { getHtml } from "utils/og-image/_templates/base";
import { getWorkHtml, workCss } from "utils/og-image/_templates/work";
import { getBlogHtml, blogCss } from "utils/og-image/_templates/blog";
import { getDefaultHtml, defaultCss } from "utils/og-image/_templates/default";

const isDev = process.env.NODE_ENV === "development";

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  try {
    console.time("handler");
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

    console.time("screenshot");
    const file = await getScreenshot(html, isDev);
    console.timeEnd("screenshot");
    res.statusCode = 200;
    res.setHeader("Content-Type", `image/png`);
    res.setHeader(
      "Cache-Control",
      `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
    );
    console.timeEnd("handler");
    res.end(file);
  } catch (e) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Internal Error</h1><p>Sorry, there was a problem</p>");
    console.error(e);
  }
}
