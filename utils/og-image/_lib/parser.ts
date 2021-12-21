import { IncomingMessage } from "http";
import { parse } from "url";
import { ParsedRequest } from "./types";

export function parseRequest(req: IncomingMessage) {
  const { query } = parse(req.url || "/", true);
  const { title, image, heading, type, url, debug }: ParsedRequest =
    query || {};

  const parsedRequest: ParsedRequest = {
    type: type || "default",
    url: url || "",
    title: title ? decodeURIComponent(title) : "",
    image: image ? decodeURIComponent(image) : "",
    heading: heading ? decodeURIComponent(heading) : "",
    debug: debug || "0",
  };

  return parsedRequest;
}
