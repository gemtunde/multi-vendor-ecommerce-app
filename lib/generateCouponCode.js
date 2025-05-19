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

export function generateUserCode(fullName) {
  // Extract initials from the full name
  const initials = fullName
    .split(" ")
    .map((name) => name.charAt(0).toUpperCase())
    .join("");

  // Get current date in YYYYMMDD format
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(now.getDate()).padStart(2, "0");
  const formattedDate = `${year}${month}${day}`;

  // Combine to form the user code
  return `GEM-${initials}-${formattedDate}`;
}
