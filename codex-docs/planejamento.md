# Planejamento de ajustes - BehindTheInfra

## Objetivo imediato

Realizar evoluções na landing page atual mantendo o repositório local até que o conteúdo esteja pronto para publicação. O foco é organizar e ajustar o site sem expor mudanças parciais no GitHub (repositório público).

## Fluxo de trabalho local

1. **Manter alterações locais**: trabalhar em branches ou diretamente na cópia local, evitando `git push` até consolidar um pacote de mudanças.
2. **Versionamento interno**: usar commits locais para registrar checkpoints, mesmo que não sejam enviados ao remoto. Isso permite reversões e comparações.
3. **Snapshots auxiliares**: se necessário, criar zips ou backups manuais antes de grandes alterações.
4. **Checklist antes do push** (quando houver): revisar textos, links, acessibilidade básica e compatibilidade com o Pages.

## Versão 1 - Lista de tarefas

### Estrutura e assets

- [x] Documentação ajustada para refletir cenário 100% estático (sem dependências de build).
- [ ] Garantir que `index.html` (raiz) esteja sincronizado com o conteúdo desejado (incluindo sections atualizadas).
- [ ] Atualizar/confirmar tokens de cor em `src/assets/css/variables.css` conforme paleta atual.
- [ ] Consolidar folha de estilos em `assets/css/` (avaliar se precisa unificar ou manter separação base/home).
- [ ] Criar/atualizar favicon e assets de identidade (logo, ícones) e referenciar no `head`.

### Conteúdo

- [ ] Revisar copy do hero (título, subtítulo, CTA) para refletir proposta atual.
- [ ] Atualizar seções "Sobre" e "Serviços" com descrição ajustada ao escopo real (incluir novos serviços, remover os que não se aplicam).
- [ ] Revisar textos da seção de contato (e-mail, CTA WhatsApp) e garantir que o telefone esteja formatado corretamente.
- [ ] Validar metatags (`title`, `description`) e ajustar SEO básico do `index.html`.

### Estilo e responsividade

- [ ] Testar quebra de layout em 1280px, 1024px, 768px, 480px e ajustar CSS onde necessário.
- [ ] Garantir contraste suficiente entre texto e fundo (especialmente nos cards e CTAs).
- [ ] Ajustar espaçamentos/paddings para leitura confortável em mobile.

### Acessibilidade e UX

- [ ] Adicionar atributos `aria-label` e `alt` onde fizer sentido (botões, ícones).
- [ ] Garantir que a navegação por teclado percorra os elementos principais (links, botões).
- [ ] Verificar estrutura semântica (`<section>`, `<h1>`/`<h2>`, listas) e corrigir hierarquia caso necessário.

### Preparação para publicação

- [x] README.md e documentação técnica revisados para orientar o fluxo estático.
- [ ] Montar checklist de deploy (arquivos a enviar, domínio, configurações do GitHub Pages).
- [ ] Testar `index.html` localmente em múltiplos browsers (Chrome, Firefox, Edge) antes de publicar.
- [ ] Preparar variante com minificação simples (opcional) caso queira otimizar tamanho antes do deploy.

## Itens em andamento

- Estrutura de diretórios reorganizada (core concluído em 30/10/2025).
- Documentação base revisada em 30/10/2025 (`README.md`, `docs/estrutura.md`, `docs/arquitetura.md`) para refletir fluxo estático.

## Próximos checkpoints sugeridos

1. Revisar documentação (`README.md`, `docs/arquitetura.md`, `codex-docs/estrutura.md`) para remover dependências irrelevantes.
2. Atualizar conteúdo textual e estilização de `index.html` conforme checklist acima.
3. Validar site localmente e, quando estiver satisfeito, decidir como versionar/publicar (push final ou branch privada).
