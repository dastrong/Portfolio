import React from "react";

function getDateValues(givenDateString) {
  const ordinals = ["th", "st", "nd", "rd"];

  // convert to date string
  const dateString = new Date(givenDateString);

  const day = dateString.getDate();
  const month = dateString.toLocaleString("default", { month: "long" });
  const year = dateString.getFullYear();

  const ord = ordinals[(day - 20) % 10] || ordinals[day] || "th";

  return [month, day, year, ord];
}

export default function DateWithOrdinal({ date }: { date: Date }) {
  const [month, day, year, ordinal] = getDateValues(date);

  return (
    <>
      {month} {day}
      <sup>{ordinal}</sup>, {year}
    </>
  );
}
