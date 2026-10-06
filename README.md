# Finance Control — Frontend

Aplicação web responsiva de controle financeiro pessoal, construída com Expo e React Native Web.

## Executar

1. Copie `.env.example` para `.env` e informe a URL da API.
2. Instale as dependências com `npm install`.
3. Execute `npm run web` e abra a URL exibida pelo Expo.

Para validar tipos e testes:

```bash
npm run typecheck
npm test
```

O primeiro acesso cria um usuário no backend e guarda apenas o UUID retornado no armazenamento local do navegador. Este MVP não implementa autenticação.
