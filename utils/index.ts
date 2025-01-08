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
