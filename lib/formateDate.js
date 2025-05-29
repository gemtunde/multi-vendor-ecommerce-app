export function formatDate(isoString) {
  if (!isoString) return "";

  const date = new Date(isoString);

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
