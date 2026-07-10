/**
 * Format integer minor currency units (cents) into high-end retail representation.
 * Always handles exact cents without floating-point calculation errors.
 */
export function formatMoney(amountMinor: number, currency: 'USD' | 'EUR' | 'GBP' = 'USD'): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  return formatter.format(amountMinor / 100);
}

/**
 * Format date in clean editorial uppercase representation.
 */
export function formatEditorialDate(date = new Date()): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(date).toUpperCase();
}
