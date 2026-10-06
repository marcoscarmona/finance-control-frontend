export const money = (value: number | string | undefined) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(value ?? 0));
export const moneyMask = (value: string) => {
  const digits = value.replace(/\D/g, '');
  if (!digits) return '';
  const cents = Number(digits);
  const integer = Math.floor(cents / 100).toLocaleString('pt-BR');
  return `R$ ${integer},${String(cents % 100).padStart(2, '0')}`;
};
export const maskedMoneyToNumber = (value: string) => {
  const digits = value.replace(/\D/g, '');
  return digits ? Number(digits) / 100 : 0;
};
export const numberToMoneyMask = (value: number | null | undefined) => value == null ? '' : moneyMask(String(Math.round(value * 100)));
export const date = (value: string) => new Intl.DateTimeFormat('pt-BR', { dateStyle: 'medium' }).format(new Date(`${value}T12:00:00`));
export const monthLabel = (year: number, month: number) => new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' }).format(new Date(year, month - 1, 1));
export const apiDate = (value = new Date()) => value.toISOString().slice(0, 10);
