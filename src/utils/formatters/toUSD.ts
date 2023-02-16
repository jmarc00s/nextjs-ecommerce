export const formatToUSD = (value: number) => {
  return Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
    currencyDisplay: 'symbol',
    minimumFractionDigits: 2,
  }).format(value);
};
