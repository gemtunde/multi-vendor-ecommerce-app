export function generateCouponCode(title = "", expiryDate = "") {
  // Convert title to camelCase format
  const camelCasedTitle = title
    .toLowerCase()
    .split(" ")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");

  // Convert expiry date (YYYY-MM-DD) to YYYYMMDD format
  const formattedDate = expiryDate.replace(/-/g, "");

  // Combine to form the coupon code
  return `${camelCasedTitle}-${formattedDate}`;
}
