export default function dateFormat(date) {
  if (date instanceof Date) {
    return new Date(date).toLocaleString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } else {
    return "Unknown";
  }
}
