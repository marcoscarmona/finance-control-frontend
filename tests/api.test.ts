import { afterEach, describe, expect, it, vi } from 'vitest';
import { api } from '@/lib/api';

describe('cliente da API', () => {
  afterEach(() => vi.unstubAllGlobals());

  it('inclui o usuário na rota de categorias', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify([]), { status: 200 }));
    vi.stubGlobal('fetch', fetchMock);

    await api.listCategories('user-123');

    expect(fetchMock).toHaveBeenCalledWith('http://localhost:8080/api/users/user-123/categories', expect.any(Object));
  });

  it('envia despesas como JSON', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ expense: {}, installments: [] }), { status: 201 }));
    vi.stubGlobal('fetch', fetchMock);

    await api.createExpense('user-123', { categoryId: 'category-1', creditCardId: 'card-1', description: 'Mercado', purchaseDate: '2026-10-06', totalAmount: 30, paymentMethod: 'CREDIT_CARD', installments: 1 });

    const [, options] = fetchMock.mock.calls[0];
    expect(options.method).toBe('POST');
    expect(JSON.parse(options.body)).toMatchObject({ creditCardId: 'card-1', totalAmount: 30 });
  });
});
