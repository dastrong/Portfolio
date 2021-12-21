import { IncomingMessage, ServerResponse } from "http";
import { parseRequest } from "utils/og-image/_lib/parser";
import { getScreenshot } from "utils/og-image/_lib/chromium";
import { getHtml } from "utils/og-image/_templates/base";
import { getWorkHtml, workCss } from "utils/og-image/_templates/work";

const isDev = process.env.NODE_ENV === "development";

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  try {
    const parsedReq = parseRequest(req);
    const workHtml = getWorkHtml(parsedReq);
    const html = getHtml(workHtml, workCss);
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
