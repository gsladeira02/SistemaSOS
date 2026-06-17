# SistemaSOS Holding Site — versão refeita

Site estático da holding SistemaSOS, refeito do zero.

## O que foi corrigido

- logo preparada com fundo transparente;
- header redesenhado do zero;
- rodapé redesenhado com caixa branca para garantir contraste da logo;
- visual refeito do zero;
- PersonalOS com faixa “Em desenvolvimento”; 
- sem WhatsApp;
- sem checkout central;
- sem login central obrigatório.

## Estrutura

- `/` — Home
- `/sistemas/` — Sistemas
- `/como-funciona/`
- `/sobre/`
- `/faq/`
- `/personalos/`
- `/o-feirante/`
- `/unhaos/`
- `/bellaos/`
- `/navalhaos/`

## Links atuais de assinatura

- PersonalOS: em desenvolvimento
- O Feirante: https://o-feirante.vercel.app
- UnhaOS: https://unha-os.vercel.app
- BellaOS: https://bella-os.vercel.app
- NavalhaOS: https://navalha-os.vercel.app

## Atualização

- Logo oficial atualizada com o arquivo enviado pelo usuário.
- E-mail de contato removido do rodapé.

## Sistemas em desenvolvimento adicionados

- LavaOS — Lava-jato e estética automotiva
- PetOS — Pet shop / banho e tosa
- BeautyOS — Procedimentos estéticos

Esses sistemas aparecem na vitrine, possuem páginas individuais e botões desabilitados como “Em desenvolvimento”.


## Versão estática sem Supabase

Este pacote mantém o SistemaSOS como site estático de holding/vitrine.

Não possui:
- Supabase;
- login central;
- checkout central;
- painel admin interno;
- banco de dados.

## Visitas e métricas

O pacote já inclui o script do Vercel Web Analytics para site HTML estático.

Depois do deploy na Vercel:

1. Acesse o projeto na Vercel.
2. Vá em Analytics.
3. Ative Web Analytics.
4. Faça um novo deploy, se a Vercel solicitar.
5. As visitas passam a aparecer no painel da própria Vercel.

## Sistemas disponíveis

- O Feirante
- UnhaOS
- BellaOS
- NavalhaOS

## Sistemas em desenvolvimento

- PersonalOS
- LavaOS
- PetOS
- BeautyOS
- e muito mais

## Deploy

Suba o projeto no GitHub e importe na Vercel como site estático.

Configuração sugerida:
- Framework Preset: Other
- Build Command: vazio
- Output Directory: ./
