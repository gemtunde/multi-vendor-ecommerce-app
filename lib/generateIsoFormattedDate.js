export function generateIsoFormattedDate(normalDate) {
  const dateObject = new Date(normalDate);
  const isoFormattedDate = dateObject.toISOString();
  return isoFormattedDate;
}

export function formatIsoDate(
  isoDate,
  options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }
) {
  if (!isoDate) return "";

  const date = new Date(isoDate);
  if (isNaN(date.getTime())) return "Invalid Date";

  return date.toLocaleString(undefined, options);
}
