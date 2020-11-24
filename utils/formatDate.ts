const options = { day: "numeric", month: "long", year: "numeric" };

export const formatDate = (date: string | Date) => {
  return new Date(date).toLocaleDateString(undefined, options);
};
