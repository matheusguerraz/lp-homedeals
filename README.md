# LP independente (Vite + React + Tailwind)

## Rodar local
```bash
npm install
npm run dev
```

## Build para publicar (qualquer hospedagem estática)
```bash
npm run build
```

Publique a pasta `dist/`.

### Observações
- `base: './'` no `vite.config.js` deixa o build "portável" (funciona em subpastas).
- Alias `@` aponta para `/src` (imports do tipo `@/components/...`).
