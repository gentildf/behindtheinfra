# BehindTheInfra

Repositório oficial da landing page estática da BehindTheInfra. O objetivo é concentrar conteúdo, identidade visual e documentação em um único lugar antes de tornar o código público novamente.

## Objetivos

- Manter o entregável estático (`index.html` + pasta `assets/`) pronto para publicação no GitHub Pages.
- Evoluir o código-fonte organizado em `src/` para facilitar futuras manutenções.
- Registrar decisões e planos em `docs/` e `codex-docs/` enquanto o trabalho acontece localmente.

## Estrutura

```
.
├─ assets/       # Arquivos estáticos publicados (CSS, imagens, ícones)
├─ index.html    # Página pronta para deploy
├─ CNAME         # Domínio customizado (quando aplicável)
├─ src/          # Fontes modulares (layouts, seções, componentes, dados)
├─ docs/         # Documentação técnica e decisões de arquitetura
└─ ...
```


## Como manusear o app

1. Abra `index.html` diretamente no navegador para validar o layout.
2. Ajuste textos e estilos nos arquivos dentro de `src/` ou `assets/`.
3. Replique alterações de `src/sections` para `index.html` (ou edite o arquivo diretamente) sempre que consolidar mudanças.
4. Faça commits locais para registrar checkpoints, mantendo o repositório privado até concluir a versão desejada.

## Deploy manual

- Envie os arquivos `index.html`, pasta `assets/` (e `CNAME`, se houver) para o branch utilizado pelo GitHub Pages.
- Teste o site publicado e atualize a documentação caso algum passo adicional seja necessário.

## Licença

Projeto proprietário da BehindTheInfra.

