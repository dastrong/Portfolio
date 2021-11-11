const options = {
  day: "numeric" as const,
  month: "long" as const,
  year: "numeric" as const,
};

export const formatDate = (date: string | Date) => {
  return new Date(date).toLocaleDateString(undefined, options);
};
