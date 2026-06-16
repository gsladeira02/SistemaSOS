# SistemaSOS Holding Site

Site estático da holding SistemaSOS.

## Estrutura

- `/` — Página inicial
- `/sistemas/` — Lista de sistemas
- `/como-funciona/` — Explicação do fluxo
- `/sobre/` — Sobre a holding
- `/faq/` — Dúvidas frequentes
- `/personalos/`
- `/o-feirante/`
- `/unhaos/`
- `/bellaos/`
- `/navalhaos/`

## Regras aplicadas

- Sem botão de WhatsApp
- Sem checkout central
- Sem login central obrigatório
- Botões de assinatura redirecionam para a página própria de cada sistema

## Onde trocar os links de assinatura

Troque os links diretamente nos arquivos HTML gerados ou edite a lista de produtos no script de origem, se for manter uma geração automática.

Links atuais:
- PersonalOS: https://personalos.com.br
- O Feirante: https://ofeirante.com.br
- UnhaOS: https://unhaos.com.br
- BellaOS: https://bellaos.com.br
- NavalhaOS: https://navalhaos.com.br

## Subir na Vercel

1. Suba estes arquivos para um repositório no GitHub.
2. Na Vercel, clique em "Add New Project".
3. Importe o repositório.
4. Framework preset: Other.
5. Build command: deixe vazio.
6. Output directory: deixe vazio ou use `./`.
7. Deploy.
