import { IncomingMessage } from "http";
import { parse } from "url";
import { ParsedRequest } from "./types";

export function parseRequest(req: IncomingMessage) {
  console.log("HTTP " + req.url);
  const { query } = parse(req.url || "/", true);
  const { title, image, heading, type, url }: ParsedRequest = query || {};

  const parsedRequest: ParsedRequest = {
    type,
    url: url || "",
    title: title ? decodeURIComponent(title) : "",
    image: image ? decodeURIComponent(image) : "",
    heading: heading ? decodeURIComponent(heading) : "",
  };

  return parsedRequest;
}
