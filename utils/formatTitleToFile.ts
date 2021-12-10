export const formatTitleToFile = (title: string) =>
  title
    .replace(/[^\w\s]/gi, "")
    .replace(/ /g, "-")
    .toLowerCase();
