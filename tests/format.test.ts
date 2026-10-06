import { describe, expect, it } from 'vitest';
import { apiDate, money } from '@/lib/format';

describe('formatadores financeiros', () => {
  it('formata valores em Real brasileiro', () => expect(money(1234.5)).toBe('R$ 1.234,50'));
  it('cria datas aceitas pela API', () => expect(apiDate(new Date('2026-10-06T12:00:00Z'))).toBe('2026-10-06'));
});
