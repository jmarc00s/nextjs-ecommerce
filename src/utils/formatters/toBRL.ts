export const formatToBRL = (value: number) => {
  return Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
    currencyDisplay: 'symbol',
    minimumFractionDigits: 2,
  }).format(value);
};
