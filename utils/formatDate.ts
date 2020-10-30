const options = { day: "numeric", month: "long", year: "numeric" };

export const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString(undefined, options);
};
