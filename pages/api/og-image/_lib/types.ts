export interface ParsedRequest {
  type?: "default" | "blog" | "work";
  title?: string;
  heading?: string;
  image?: string;
  url?: string;
}
