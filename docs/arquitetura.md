# Arquitetura BehindTheInfra

## Visão geral

- **Frontend estático** com HTML modularizado em `src/layouts`, `src/sections` e `src/components`.
- **Estilos desacoplados** por meio de tokens (`variables.css`), base (`base.css`) e folha específica por página (`home.css`).
- **Scripts** (quando necessários) podem ser mantidos em `src/assets/js`, mas o fluxo atual não depende deles.
- **Dados** opcionais em `src/data` para replicar conteúdo repetitivo sem editar HTML diretamente.
- **Entregável estático** versionado na raiz (`index.html` + pasta `assets/`) para deploy imediato.

## Convenções

- Manter `index.html` como fonte da verdade do que vai ao ar.
- Usar `src/` para organizar seções/componentes antes de consolidar o arquivo final.
- Registrar qualquer automação adicional em `codex-docs/` antes de publicá-la.
- Tratar `config/`, `scripts/` e `tests/` como espaços opcionais para experimentos ou validações futuras.

## Próximos passos

1. Consolidar o conteúdo de `src/sections` no `index.html` sempre que houver alteração relevante.
2. Validar manualmente o layout em diferentes resoluções (desktop/tablet/mobile).
3. Registrar requisitos de acessibilidade e checklist de revisão em `tests/` ou `codex-docs/`.
4. Documentar a estratégia de deploy manual (GitHub Pages) para quando o repositório voltar a ser público.
