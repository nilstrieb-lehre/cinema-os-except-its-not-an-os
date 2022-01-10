export const formatCurrency = (cents) => {
  const amount = Number(cents) / 100;

  return new Intl.NumberFormat('de-ch', { style: 'currency', currency: 'CHF' }).format(amount);
};
