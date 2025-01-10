import { format } from "date-fns";

export function splitAmountByThousands(amount: number) {
  if (!amount) return null;
  const parts = [];
  let remaining = amount?.toString();

  while (remaining.length > 3) {
    parts.unshift(remaining.slice(-3));
    remaining = remaining.slice(0, -3);
  }

  if (remaining.length > 0) {
    parts.unshift(remaining);
  }

  return parts.join(",");
}

export const formatDateWithSuffix = (date: Date) => {
  const day = date.getDate();
  const month = format(date, "MMMM");

  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  return `${day}${suffix} ${month}`;
};
