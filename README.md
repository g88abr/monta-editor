# Monta — nome provisório 🎬

**Plataforma que reúne ferramentas, recursos e comunidade para editores de vídeo.**

Projeto de **Gabriel & Mikes**. O foco desde o primeiro dia é escala: muita gente
usando, dados para analisar, melhorias no lugar certo. Dinheiro vem depois.

---

## Como abrir

É HTML/CSS/JS puro. **Não precisa instalar nada.**

### Jeito 1 — duplo clique
Abra o arquivo `index.html` com dois cliques. Pronto.

### Jeito 2 — servidor local (recomendado)
```bash
node server.js
```
Depois abra <http://127.0.0.1:8777>

### Para publicar de graça
Arraste a pasta para [netlify.com/drop](https://app.netlify.com/drop) — em 10 segundos
você tem um link público para mandar no grupo.

---

## O que tem aqui

```
appeditor/
├── index.html          ← Landing page (apresentação do projeto)
├── css/styles.css      ← Estilos da landing
├── js/main.js          ← Abas da demonstração, menu, animações
├── app/                ← Protótipo navegável da plataforma
│   ├── index.html
│   ├── css/app.css
│   └── js/app.js       ← Dados + toda a interação
├── server.js           ← Servidor local opcional
└── README.md
```

### Landing page (`index.html`)
- Hero com demonstração visual da interface
- Seção do problema (tempo, custo, rede de contato, talento sem nome)
- **Demonstração interativa das 5 abas** — dá para clicar e ver cada área
- Comunidade com exemplos reais de publicação
- Ranking de reconhecimento
- Roadmap "primeiro escala, depois o resto"

### Protótipo (`app/`)
| Aba | O que faz |
|---|---|
| **Início** | Painel com atalhos, métricas e destaques da comunidade |
| **Ferramentas** | 12 ferramentas com filtro por categoria e busca |
| **Música & assets** | Trilhas, loops, clipes e templates com licença visível |
| **Produção** | Kanban de projetos + checklist antes de entregar |
| **Comunidade** | Feed com publicação real, filtros e curtidas |
| **Reconhecimento** | Ranking de editores por contribuição |

**Funciona de verdade:** trocar de aba, filtrar, pesquisar, publicar no feed,
curtir, marcar checklist, notificações, menu mobile, link com `#aba`.

**É simulado:** login, download, abrir ferramenta, backend. Nada é salvo ao fechar.

---

## Sugestões de nome

O "Monta" está aqui só para vocês terem algo na tela. As minhas sugestões:

| Nome | Por quê |
|---|---|
| **Sala de Corte** | Nome de verdade da onde o editor trabalha (*cutting room*). Sofisticado, fácil de lembrar, bom para LinkedIn. |
| **Corte Livre** | Duplo sentido: corte livre (técnico) + livre (grátis, liberdade). Tem pegada de marca. |
| **Bancada** | A bancada do editor. Trabalho manual, feito à mão. "A bancada dos editores". |
| **Monta** | De *montagem*. Curto, é verbo ("monta junto"), bom para hashtag. |
| **EdiZona** | Mais popular, mais fácil de falar no boca a boca. |
| **CutBR** | Direto, técnico, falado por quem já edita. |

**Minha recomendação:** **Sala de Corte** se quiserem coisa séria e profissional,
**Corte Livre** se quiserem marca com personalidade.

---

## Próximos passos (para decidir juntos)

1. **Escolher o nome** — muda tudo: domínio, logo, tom de voz.
2. **Mostrar para 10 editores** e anotar o que eles usam de verdade.
3. **Definir quais 3 abas são o coração** — não dá para fazer tudo bem feito de uma vez.
4. **Conta de usuário + banco de dados** — só quando a comunidade já estiver aquecendo.

---

## Como editar

- Texto da landing → `index.html` (é texto puro, dá para procurar e trocar)
- Ferramentas e trilhas do protótipo → `app/js/app.js`, arrays `TOOLS` e `TRACKS`
- Cores → `css/styles.css` e `app/css/app.css`, variáveis no topo (`--accent` etc.)
- Publicações de exemplo → `app/js/app.js`, array `POSTS`

Feito com foco em editores pequenos do Brasil. — Gabriel & Mikes
