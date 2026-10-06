import { describe, expect, it } from 'vitest';
import { apiDate, maskedMoneyToNumber, money, moneyMask, numberToMoneyMask } from '@/lib/format';

describe('formatadores financeiros', () => {
  it('formata valores em Real brasileiro', () => expect(money(1234.5)).toBe('R$ 1.234,50'));
  it('cria datas aceitas pela API', () => expect(apiDate(new Date('2026-10-06T12:00:00Z'))).toBe('2026-10-06'));
  it('mascara centavos digitados no padrão brasileiro', () => {
    expect(moneyMask('1351056')).toBe('R$ 13.510,56');
    expect(moneyMask('R$ 13.510,56')).toBe('R$ 13.510,56');
    expect(moneyMask('')).toBe('');
  });
  it('converte a máscara para o valor decimal da API', () => {
    expect(maskedMoneyToNumber('R$ 13.510,56')).toBe(13510.56);
    expect(maskedMoneyToNumber('0')).toBe(0);
    expect(numberToMoneyMask(13510.56)).toBe('R$ 13.510,56');
  });
});
