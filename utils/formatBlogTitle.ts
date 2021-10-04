export const formatBlogTitle = (blogTitle: string) =>
  blogTitle
    .toString()
    .replace(/[^\w\s]/gi, "")
    .replace(/ /g, "-")
    .toLowerCase();
