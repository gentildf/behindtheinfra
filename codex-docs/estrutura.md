# Estrutura proposta do site BehindTheInfra

Documento de referência para reorganizar o conteúdo do `index.html` em uma estrutura modular, permitindo manutenção e evolução sem alterar o comportamento atual.

## 1. Levantamento do que existe hoje

- **Cabeçalho `<head>`**: metatags básicas, Google Fonts e bloco extenso de CSS inline.
- **Layout principal**:
  - `header` fixo com logo e navegação para âncoras (`#sobre`, `#servicos`, `#contato`).
  - `section.hero` com chamada principal e botão para contato.
  - `section#sobre` apresentando a consultoria.
  - `section#servicos` contendo grid de quatro cards.
  - `section#contato` com CTA, e-mail e link para WhatsApp.
  - Botão flutuante de WhatsApp (`.whatsapp-float`).
  - `footer` com direitos autorais.
- **Estilos**: todos centralizados no `<style>` da página, incluindo variáveis CSS, layout responsivo e animações `@keyframes`.
- **Dependências externas**: Font Awesome para ícone do WhatsApp.

## 2. Objetivo da reorganização

- Separar estrutura HTML, estilos e assets, mantendo o mesmo HTML renderizado final.
- Facilitar edição de seções específicas sem navegar por um arquivo único extenso.
- Preparar o terreno para futuras automações (geradores estáticos ou bundlers) caso desejado.

## 3. Estrutura de diretórios sugerida

```
behindtheinfra/
│
├─ assets/                  # Artefatos estáticos prontos (CSS, imagens, favicons)
├─ src/
│  ├─ layouts/
│  │  └─ base.html          # Estrutura geral (head, header, footer) com includes/parciais
│  ├─ sections/
│  │  ├─ hero.html
│  │  ├─ sobre.html
│  │  ├─ servicos.html
│  │  └─ contato.html
│  ├─ components/
│  │  └─ whatsapp-float.html
│  ├─ data/
│  │  └─ services.json      # Lista de serviços para gerar cards dinamicamente (opcional)
│  ├─ assets/
│  │  ├─ css/
│  │  │  ├─ variables.css   # Definição das cores e tokens
│  │  │  ├─ base.css        # Reset, tipografia, layout comum
│  │  │  └─ home.css        # Estilos específicos da página inicial
│  │  ├─ js/
│  │  │  └─ main.ts         # Script de entrada (TypeScript ou JS, conforme stack)
│  │  └─ img/
│  │     └─ ...             # Futuras ilustrações/ícones
│  └─ styles/
│     └─ home.scss          # Pré-processadores ou variações de stylesheet
│
├─ config/                  # Reservado para automações futuras (opcional)
│  └─ ...
│
├─ scripts/                 # Scripts utilitários (build, deploy) – uso opcional
│  └─ ...
│
├─ tests/                   # Base para testes futuros (unitários ou e2e)
│  └─ ...
│
├─ docs/                    # Documentação técnica adicional
│  └─ arquitetura.md
│
├─ index.html               # Artefato estático pronto para deploy
├─ CNAME                    # Configuração de domínio customizado (opcional)
├─ README.md
│
└─ codex-docs/
   ├─ planejamento.md
   └─ estrutura.md          # (este documento)
```

> Caso o projeto permaneça 100% estático e sem geração automática, as pastas `layouts`, `sections` e `components` podem servir apenas como organização manual de trechos que serão compilados/copiados para `index.html`. Em um segundo momento é possível adotar um gerador estático (ex.: Eleventy, Astro) para automatizar esse passo.

## 4. Diretrizes para a separação

- **HTML**: mover o conteúdo do `index.html` para a estrutura modular acima, garantindo que o arquivo `index.html` na raiz continue com o mesmo markup final. Se não houver build, manter o `src/index.html` segmentado com comentários ou includes manuais.
- **CSS**:
  - Transferir variáveis e resets para `variables.css` e `base.css`.
  - Criar `home.css` com os estilos específicos das seções da landing page.
  - Linkar os arquivos via `<link rel="stylesheet" href="/assets/css/base.css">` no layout base.
- **Assets externos**:
  - Registrar dependências (Google Fonts, Font Awesome) no layout base para fácil manutenção.
  - Avaliar hospedagem local de ícones caso queira reduzir requisições externas.
- **Conteúdo**:
  - Manter textos atuais como referência em arquivos de dados ou constantes, permitindo traduções ou customizações sem editar diretamente os componentes.

## 5. Stack atual e bases recomendadas

- **Stack presente**:
  - HTML5 estático com estilos separados em `assets/css`.
  - CSS puro controlando layout, animações e variáveis.
  - Ausência de JavaScript aplicado ao front-end (apenas navegação e CTAs).
  - Dependências externas: Google Fonts (Montserrat) e Font Awesome (ícone de WhatsApp).
  - Build inexistente: página entregue diretamente como arquivo único.
- **Bases para evolução (opcional)**:
  - Caso seja necessária automação no futuro, as pastas `config/` e `scripts/` já estão reservadas.
  - Avaliar uso de um gerador/bundler apenas quando houver ganho claro (ex.: múltiplas páginas, assets compilados).
  - Documentar novas ferramentas em `docs/arquitetura.md` antes de publicar alterações no repositório público.

## 6. Próximos passos sugeridos

1. Copiar o `index.html` atual para `src/layouts/base.html`, isolando `<head>` e `<header>/<footer>`.
2. Extrair cada `section` e o botão flutuante para arquivos em `src/sections` e `src/components`.
3. Migrar o bloco `<style>` para os arquivos CSS dedicados dentro de `src/assets/css`.
4. Garantir que `index.html` continue renderizando exatamente igual (usar build manual ou script simples de concatenação).
5. Atualizar `codex-docs/planejamento.md` com o plano de execução e checkpoints conforme as etapas forem concluídas.

Com essa estrutura, futuras páginas e componentes poderão ser adicionados sem duplicar código, e qualquer build tool poderá ser implementada gradualmente.

## 7. Estado atual da implementação (30/10/2025)

- Layout base (`src/layouts/base.html`) já referencia includes de seções e componentes.
- Seções extraídas para `src/sections/*.html` com estilos dedicados em `src/assets/css`.
- `index.html` na raiz consome as mesmas classes e assets, mantendo o site funcional.
- Configurações iniciais (`config/`) e scripts (`scripts/`) criados como placeholders para a futura pipeline.
