/* ============================================================
   MONTA — Protótipo: dados + interações
   Sem dependências. Funciona em qualquer navegador.
   ============================================================ */

(function () {
  'use strict';

  /* =========================================================
     1. DADOS DE DEMONSTRAÇÃO
     ========================================================= */

  var TOOLS = [
    { ico:'✂️', nome:'Corte inteligente', desc:'Remove silêncios e trechos mortos do seu vídeo automaticamente.', cat:'corte', tag:'grátis', cls:'' },
    { ico:'💬', nome:'Legendas automáticas', desc:'Transcrição em português com quebra de linha no ritmo da fala.', cat:'texto', tag:'IA', cls:'tag--v' },
    { ico:'🎨', nome:'Remover fundo', desc:'Extraia pessoa ou objeto sem precisar de chroma.', cat:'ia', tag:'IA', cls:'tag--v' },
    { ico:'📦', nome:'Conversor de formato', desc:'MP4, MOV, ProRes, GIF — direto no navegador, sem instalar.', cat:'formato', tag:'rápido', cls:'tag--c' },
    { ico:'🔊', nome:'Nivelador de áudio', desc:'Igualiza volume entre takes e locuções diferentes.', cat:'audio', tag:'grátis', cls:'' },
    { ico:'🎞️', nome:'Extrair frames', desc:'Gera uma sequência de frames a partir de um trecho do vídeo.', cat:'corte', tag:'grátis', cls:'' },
    { ico:'📐', nome:'Redimensionar para redes', desc:'Recorta para 9:16, 1:1 e 16:9 mantendo o assunto no centro.', cat:'formato', tag:'rápido', cls:'tag--c' },
    { ico:'🎙️', nome:'Transcrever entrevista', desc:'Texto completo da gravação para achar a melhor citação.', cat:'ia', tag:'IA', cls:'tag--v' },
    { ico:'🎚️', nome:'Reduzir ruído', desc:'Tira ar-condicionado, vento e chiado da locução.', cat:'audio', tag:'IA', cls:'tag--v' },
    { ico:'🔤', nome:'Legendas por arquivo SRT', desc:'Importa, ajusta tempo e exporta legenda pronta.', cat:'texto', tag:'grátis', cls:'' },
    { ico:'🗜️', nome:'Compressor leve', desc:'Diminui o tamanho do arquivo sem perder a cara do vídeo.', cat:'formato', tag:'rápido', cls:'tag--c' },
    { ico:'🥁', nome:'Detectar batidas', desc:'Encontra as batidas do áudio para cortar no ritmo da música.', cat:'corte', tag:'IA', cls:'tag--v' }
  ];

  var ASSETS = [
    { nome:'Cinematic Teal & Orange', meta:'.cube · 33kb', cat:'lut', ico:'🎬', thumb:'thumb--lut', badge:'LUT',
      arq:'cinematic_teal_orange.cube', tam:'33 kb', lic:'Livre — royalty free', data:'12/11/2026', ts:20261112, fav:true,
      desc:'Correção teal & orange para trailers e peças institucionais. Combina com pele natural e luz de janela.' },
    { nome:'Peak Light — Pacote de LUTs', meta:'.cube · 48kb', cat:'lut', ico:'🌄', thumb:'thumb--lut', badge:'LUT',
      arq:'peak_light_pack.cube', tam:'48 kb', lic:'Livre — royalty free', data:'08/11/2026', ts:20261108,
      desc:'Pacote com 12 LUTs de alto brilho para clipes de dia e cenas em exterior.' },
    { nome:'Impacto Forte', meta:'.wav · 2.1mb', cat:'sfx', ico:'💥', thumb:'thumb--sfx', badge:'SFX',
      arq:'impacto_forte.wav', tam:'2.1 mb', lic:'Royalty free', data:'05/11/2026', ts:20261105, fav:true,
      dur:'0:03', sr:'48 kHz', can:'Estéreo', bit:'2.304 kbps',
      desc:'Batida grave para revelação de logo e cortes secos.' },
    { nome:'Whoosh Curto', meta:'.wav · 180kb', cat:'sfx', ico:'💨', thumb:'thumb--sfx', badge:'SFX',
      arq:'whoosh_curto.wav', tam:'180 kb', lic:'Royalty free', data:'05/11/2026', ts:20261105,
      dur:'0:02', sr:'48 kHz', can:'Estéreo', bit:'2.304 kbps',
      desc:'Transição rápida entre cenas e trocas de ângulo.' },
    { nome:'Hopeful Journey', meta:'.mp3 · 3.8mb', cat:'musica', ico:'🎵', thumb:'thumb--musica', badge:'Música',
      arq:'hopeful_journey.mp3', tam:'3.8 mb', lic:'Uso comercial livre', data:'02/11/2026', ts:20261102,
      dur:'2:46', sr:'44.1 kHz', can:'Estéreo', bit:'320 kbps',
      desc:'Trilha leve com piano e cordas — aberturas inspiradoras.' },
    { nome:'Manhã Devagar', meta:'.mp3 · 3.1mb', cat:'musica', ico:'🎧', thumb:'thumb--musica', badge:'Música',
      arq:'manha_devagar.mp3', tam:'3.1 mb', lic:'Uso comercial livre', data:'01/11/2026', ts:20261101, fav:true,
      dur:'1:58', sr:'44.1 kHz', can:'Estéreo', bit:'320 kbps',
      desc:'Trilha lo-fi · piano suave — perfeita para vlogs e reels calmos.' },
    { nome:'Glitch Transition', meta:'.mp4 · 1.2mb', cat:'efeito', ico:'⚡', thumb:'thumb--efeito', badge:'Transição',
      arq:'glitch_transition.mp4', tam:'1.2 mb', lic:'Livre para uso comercial', data:'28/10/2026', ts:20261028,
      dur:'0:01', desc:'Ruptura digital de 12 quadros para cortes de ritmo.' },
    { nome:'Zoom Cinematográfico', meta:'.mp4 · 900kb', cat:'efeito', ico:'🔍', thumb:'thumb--efeito', badge:'Efeito',
      arq:'zoom_cinematografico.mp4', tam:'900 kb', lic:'Livre para uso comercial', data:'28/10/2026', ts:20261028,
      dur:'0:02', desc:'Zoom com desfoque de movimento para entradas de cena.' },
    { nome:'Template Reels Dinâmico', meta:'.prproj · 4.2mb', cat:'template', ico:'🧩', thumb:'thumb--template', badge:'Template',
      arq:'reels_dinamico.prproj', tam:'4.2 mb', lic:'Livre — editável', data:'25/10/2026', ts:20261025,
      desc:'Estrutura 9:16 com marcações de ritmo e placeholders prontos.' },
    { nome:'Lower Thirds Modernos', meta:'.aep · 2.8mb', cat:'template', ico:'🏷️', thumb:'thumb--template', badge:'Template',
      arq:'lower_thirds_modernos.aep', tam:'2.8 mb', lic:'Livre — editável', data:'25/10/2026', ts:20261025, fav:true,
      desc:'Faixas de nome minimalistas com entrada animada em 0,4s.' },
    { nome:'Display Pesada — Beta', meta:'.otf · 120kb', cat:'fonte', ico:'🔤', thumb:'thumb--fonte', badge:'Fonte',
      arq:'display_pesada_beta.otf', tam:'120 kb', lic:'Uso pessoal e comercial', data:'20/10/2026', ts:20261020,
      desc:'Tipografia de alto contraste para títulos de impacto.' },
    { nome:'Sans Geométrica', meta:'.otf · 180kb', cat:'fonte', ico:'🅰️', thumb:'thumb--fonte', badge:'Fonte',
      arq:'sans_geometrica.otf', tam:'180 kb', lic:'Uso pessoal e comercial', data:'20/10/2026', ts:20261020,
      desc:'Família geométrica com 5 pesos — legível em qualquer tela.' },
    { nome:'Corte na respiração', meta:'12 min · vídeo', cat:'tutorial', ico:'🎓', thumb:'thumb--tutorial', badge:'Tutorial',
      arq:'corte_na_respiracao.mp4', tam:'240 mb', lic:'Livre para assistir', data:'18/10/2026', ts:20261018,
      dur:'12:04', desc:'Onde parar o corte para a fala não parecer cortada.' },
    { nome:'Legendas na prática', meta:'8 min · vídeo', cat:'tutorial', ico:'📚', thumb:'thumb--tutorial', badge:'Tutorial',
      arq:'legendas_na_pratica.mp4', tam:'160 mb', lic:'Livre para assistir', data:'18/10/2026', ts:20261018,
      dur:'08:37', desc:'Quebra de linha, ritmo e erros que quebram a legenda.' },
    { nome:'B-roll de cidade', meta:'.mp4 · 42mb', cat:'video', ico:'🏙️', thumb:'thumb--video', badge:'Clipe',
      arq:'broll_cidade.mp4', tam:'42 mb', lic:'Uso livre com crédito', data:'15/10/2026', ts:20261015,
      dur:'0:38', sr:'48 kHz', can:'Estéreo', bit:'160 kbps',
      desc:'Plano-sequência de rua ao anoitecer, 4K a 24fps.' },
    { nome:'Praia ao entardecer', meta:'.mp4 · 38mb', cat:'video', ico:'🌅', thumb:'thumb--video', badge:'Clipe',
      arq:'praia_entardecer.mp4', tam:'38 mb', lic:'Uso livre com crédito', data:'15/10/2026', ts:20261015,
      dur:'0:31', sr:'48 kHz', can:'Estéreo', bit:'160 kbps',
      desc:'Horizonte dourado com movimento lento de câmera.' },
    { nome:'Corrida da Cidade', meta:'.mp3 · 4.4mb', cat:'musica', ico:'🚗', thumb:'thumb--musica', badge:'Música',
      arq:'corrida_da_cidade.mp3', tam:'4.4 mb', lic:'Uso comercial livre', data:'10/10/2026', ts:20261010,
      dur:'2:24', sr:'44.1 kHz', can:'Estéreo', bit:'320 kbps',
      desc:'Trilha eletrônica · energia alta — ideal para montagens rápidas.' },
    { nome:'Quase Sussurro', meta:'.mp3 · 5.6mb', cat:'musica', ico:'🌙', thumb:'thumb--musica', badge:'Música',
      arq:'quase_sussurro.mp3', tam:'5.6 mb', lic:'Uso comercial livre', data:'10/10/2026', ts:20261010,
      dur:'3:10', sr:'44.1 kHz', can:'Estéreo', bit:'320 kbps',
      desc:'Trilha ambient para documentário e entrevistas.' },
    { nome:'Loop Bateria Leve', meta:'.wav · 3.4mb', cat:'sfx', ico:'🥁', thumb:'thumb--sfx', badge:'SFX',
      arq:'loop_bateria_leve.wav', tam:'3.4 mb', lic:'Royalty free', data:'08/10/2026', ts:20261008,
      dur:'0:30', sr:'48 kHz', can:'Estéreo', bit:'2.304 kbps',
      desc:'Percussão orgânica em loop para vinhetas e cortes de tempo.' }
  ];

  var KANBAN = {
    recebidos: [
      { ico:'🏛️', bg:'var(--orange-soft)', titulo:'Vídeo Institucional', cliente:'Igreja Boa Nova', data:'25/11' },
      { ico:'🎥', bg:'var(--orange-soft)', titulo:'Mini-doc — projeto pessoal', cliente:'Sem cliente', data:'sem prazo' }
    ],
    producao: [
      { ico:'🎙️', bg:'var(--blue-soft)', titulo:'Podcast ep. 42 — vertical', cliente:'Estúdio Sul', data:'19/11' },
      { ico:'🍳', bg:'var(--blue-soft)', titulo:'Reels de culinária — lote 3', cliente:'Chef Marina', data:'20/11' }
    ],
    entregues: [
      { ico:'🏥', bg:'var(--green-soft)', titulo:'Institucional — Clínica Vida', cliente:'Clínica Vida', data:'16/11' },
      { ico:'📻', bg:'var(--green-soft)', titulo:'Spot 30s — rádio', cliente:'Rádio Comunitária', data:'14/11' }
    ]
  };

  var POSTS = [
    { autor:'Mikes', handle:'@mikes.cuts', tempo:'há 1 d', type:'dica', ava:'ava--blue',
      titulo:'Corte na respiração: o ajuste que faz o vídeo parecer profissional',
      texto:'Nunca corte no meio da palavra. Corte no fim da inspiração, antes da expiração — o cérebro do espectador não percebe a emenda.',
      likes:213, comments:27 },
    { autor:'Ana Beatriz', handle:'@ana.cuts', tempo:'há 5 h', type:'feedback', ava:'ava--pink',
      titulo:'Postei meu primeiro corte de entrevista — o que eu melhoraria?',
      texto:'Sentei a câmera na entrevistadora por engano em dois takes. Devo reconstruir ou deixar assim? Aceito crítica dura.',
      likes:41, comments:8 },
    { autor:'Lucas M.', handle:'@lucasmonta', tempo:'há 2 h', type:'duvida', ava:'ava--orange',
      titulo:'Como cobrar por corte de Reels quando o cliente pede 12 versões?',
      texto:'Estou começando e aceitei o valor pensando que era um vídeo só. Achei que ia ser rápido — não foi. Como vocês fazem?',
      likes:12, comments:14 },
    { autor:'Rafael T.', handle:'@rafamotion', tempo:'há 3 h', type:'vaga', ava:'ava--green',
      titulo:'Procuro editor para projeto mensal de um canal de culinária',
      texto:'Pagamento fixo, 8 vídeos por mês, material organizado. Preciso de alguém que curta corte rápido e ritmo leve.',
      likes:9, comments:5 }
  ];

  var RANK = [
    { pos:'01', nome:'Mikes', handle:'@mikes.cuts', esp:'Corte & montagem', ajudas:142, selo:'Fundador', cls:'', ava:'ava--blue' },
    { pos:'02', nome:'Ana Beatriz', handle:'@ana.cuts', esp:'Documentário', ajudas:118, selo:'Mentora', cls:'rank__badge--green', ava:'ava--pink' },
    { pos:'03', nome:'Rafael T.', handle:'@rafamotion', esp:'Motion design', ajudas:97, selo:'Contribuinte', cls:'rank__badge--blue', ava:'ava--green' },
    { pos:'04', nome:'Gabriel (você)', handle:'@gabriel.edita', esp:'Redes sociais', ajudas:86, selo:'Fundador', cls:'', ava:'', me:true },
    { pos:'05', nome:'Lucas M.', handle:'@lucasmonta', esp:'Reels & Shorts', ajudas:64, selo:'Em ascensão', cls:'rank__badge--m', ava:'ava--orange' },
    { pos:'06', nome:'Bruno S.', handle:'@bruno.edita', esp:'YouTube longo', ajudas:51, selo:'Em ascensão', cls:'rank__badge--m', ava:'ava--blue' }
  ];

  var TITULOS = {
    inicio:      ['Overview', 'Dashboard'],
    biblioteca:  ['Biblioteca', 'Universal'],
    producao:    ['Produção', 'Projetos'],
    ferramentas: ['Ferramentas', 'Todas'],
    comunidade:  ['Comunidade', 'Feed']
  };

  var DEFAULT_CAT = { biblioteca:'todos', ferramentas:'todas', comunidade:'todos' };

  /* =========================================================
     2. UTILIDADES
     ========================================================= */

  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }

  function esc(v) {
    return String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function toast(titulo, msg) {
    var wrap = $('#toasts');
    if (!wrap) return;
    var el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = '<b>' + esc(titulo) + '</b>' + esc(msg);
    wrap.appendChild(el);
    setTimeout(function () {
      el.style.transition = 'opacity .3s, transform .3s';
      el.style.opacity = '0';
      el.style.transform = 'translateX(30px)';
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 320);
    }, 3200);
  }

  function abrirModal(t, m) {
    $('#modalTitle').textContent = t;
    $('#modalText').textContent = m;
    $('#modal').classList.add('is-open');
  }
  function fecharModal() { $('#modal').classList.remove('is-open'); }

  /* =========================================================
     3. RENDERIZAÇÃO
     ========================================================= */

  function assetCard(a, sel) {
    return '' +
      '<article class="asset' + (sel ? ' is-sel' : '') + '" data-asset="' + esc(a.nome) + '">' +
        '<div class="asset__thumb ' + a.thumb + '">' +
          '<span class="asset__badge">' + esc(a.badge) + '</span>' +
          '<button class="asset__dl" data-dl="' + esc(a.nome) + '" aria-label="Baixar">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7.5 11l4.5 4.5 4.5-4.5"/><path d="M5 19h14"/></svg>' +
          '</button>' +
          '<span>' + a.ico + '</span>' +
        '</div>' +
        '<div class="asset__body"><b>' + esc(a.nome) + '</b><small>' + esc(a.meta) + '</small></div>' +
      '</article>';
  }

  /* ---------- Biblioteca: detalhes do item ---------- */
  var CAT_NOMES = {
    todos:'Todos os itens', video:'Clipes', musica:'Músicas', sfx:'Áudio', lut:'LUTs',
    efeito:'Efeitos', template:'Templates', fonte:'Fontes', tutorial:'Tutoriais',
    fav:'Favoritos', recent:'Recentes'
  };

  function bateBusca(a, termo) {
    if (!termo) return true;
    var t = termo.toLowerCase();
    return a.nome.toLowerCase().indexOf(t) > -1 ||
           String(a.desc || '').toLowerCase().indexOf(t) > -1 ||
           String(a.badge || '').toLowerCase().indexOf(t) > -1 ||
           String(a.arq || '').toLowerCase().indexOf(t) > -1;
  }

  function passaCat(a, cat) {
    if (cat === 'todos') return true;
    if (cat === 'fav') return !!a.fav;
    if (cat === 'recent') return a.ts >= 20261101;
    return a.cat === cat;
  }

  function detalheHTML(a) {
    var linhas = '';
    function row(rot, val) {
      linhas += '<div class="lib__dt-row"><span>' + rot + '</span><b>' + esc(val) + '</b></div>';
    }
    row('Arquivo', a.arq);
    if (a.dur) row('Duração', a.dur);
    if (a.sr) row('Taxa de amostragem', a.sr);
    if (a.can) row('Canais', a.can);
    if (a.bit) row('Bit rate', a.bit);
    row('Tamanho', a.tam);
    row('Licença', a.lic);
    row('Categoria', CAT_NOMES[a.cat] || a.badge);
    row('Adicionado em', a.data);

    return '' +
      '<div class="lib__dt-prev ' + a.thumb + '"><span>' + a.ico + '</span></div>' +
      '<div class="lib__dt-name">' + esc(a.nome) + '</div>' +
      '<span class="lib__dt-badge">' + esc(a.badge) + '</span>' +
      '<div class="lib__dt-rows">' + linhas + '</div>' +
      '<p class="lib__dt-desc">' + esc(a.desc || '') + '</p>' +
      '<div class="lib__dt-acts">' +
        '<button class="btn btn--sm" data-dl="' + esc(a.nome) + '">Baixar</button>' +
        '<button class="btn btn--sm btn--ghost" data-preview="' + esc(a.nome) + '">Prévia</button>' +
      '</div>';
  }

  function detalheVazio() {
    return '' +
      '<div class="lib__dt-empty">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/><path d="M3 17.5l9 5 9-5" opacity=".5"/></svg>' +
        '<b>Nenhum item selecionado</b><br>Clique em um item da grade para ver arquivo, licença e detalhes.' +
      '</div>';
  }

  function selecionaAsset(nome) {
    selLib = nome;
    $$('#biblioAssets .asset').forEach(function (c) {
      c.classList.toggle('is-sel', c.getAttribute('data-asset') === nome);
    });
    var a = null;
    for (var i = 0; i < ASSETS.length; i++) {
      if (ASSETS[i].nome === nome) { a = ASSETS[i]; break; }
    }
    var det = $('#libDetail');
    if (det) det.innerHTML = a ? detalheHTML(a) : detalheVazio();
  }

  function toolCard(t) {
    return '' +
      '<article class="tool">' +
        '<div class="tool__top">' +
          '<span class="tool__ico">' + t.ico + '</span>' +
          '<div><h3>' + esc(t.nome) + '</h3><p>' + esc(t.desc) + '</p></div>' +
        '</div>' +
        '<div class="tool__foot">' +
          '<span class="tag ' + t.cls + '">' + esc(t.tag) + '</span>' +
          '<button class="tool__open" data-tool="' + esc(t.nome) + '">Abrir ' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>' +
          '</button>' +
        '</div>' +
      '</article>';
  }

  function postCard(p, mini) {
    return '' +
      '<article class="post' + (mini ? ' post--mini' : '') + '">' +
        '<div class="post__top">' +
          '<span class="ava ' + p.ava + '">' + esc(p.autor.charAt(0)) + '</span>' +
          '<div class="post__who"><b>' + esc(p.autor) + '</b><small>' + esc(p.handle) + ' · ' + esc(p.tempo) + '</small></div>' +
          '<span class="post__flag" data-type="' + p.type + '">' + flagLabel(p.type) + '</span>' +
        '</div>' +
        (mini
          ? '<div class="post__row"><div><h3>' + esc(p.titulo) + '</h3><p>' + esc(p.texto) + '</p></div><span class="post__thumb"></span></div>'
          : '<h3>' + esc(p.titulo) + '</h3><p>' + esc(p.texto) + '</p>') +
        (mini ? '' :
          '<div class="post__foot">' +
            '<button class="react" data-like>' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20s-7-4.5-9.5-9A5.2 5.2 0 0 1 12 6a5.2 5.2 0 0 1 9.5 5c-2.5 4.5-9.5 9-9.5 9z"/></svg>' +
              '<span>' + p.likes + '</span></button>' +
            '<button class="react" data-comment>' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
              p.comments + '</button>' +
            '<button class="react" data-share>Compartilhar</button>' +
          '</div>') +
      '</article>';
  }

  function flagLabel(t) {
    return { duvida:'dúvida', dica:'dica', feedback:'feedback', vaga:'vaga' }[t] || t;
  }

  function kcard(t, bg) {
    return '' +
      '<div class="ptask">' +
        '<div class="ptask__top">' +
          '<span class="ptask__ico" style="background:' + (bg || 'var(--accent-soft)') + '">' + t.ico + '</span>' +
          '<div><b>' + esc(t.titulo) + '</b><small>' + esc(t.cliente) + '</small></div>' +
        '</div>' +
        '<span class="ptask__date">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 11h18"/></svg>' +
          esc(t.data) +
        '</span>' +
      '</div>';
  }

  function kanbanHTML() {
    return '' +
      '<div class="kcol kcol--recv">' +
        '<div class="kcol__head"><h4>Recebidos</h4><span>' + KANBAN.recebidos.length + '</span></div>' +
        KANBAN.recebidos.map(function (t) { return kcard(t, 'var(--orange-soft)'); }).join('') +
      '</div>' +
      '<div class="kcol kcol--prod">' +
        '<div class="kcol__head"><h4>Em produção</h4><span>' + KANBAN.producao.length + '</span></div>' +
        KANBAN.producao.map(function (t) { return kcard(t, 'var(--blue-soft)'); }).join('') +
      '</div>' +
      '<div class="kcol kcol--done">' +
        '<div class="kcol__head"><h4>Entregues</h4><span>' + KANBAN.entregues.length + '</span></div>' +
        KANBAN.entregues.map(function (t) { return kcard(t, 'var(--green-soft)'); }).join('') +
      '</div>';
  }

  function rankHTML() {
    return '' +
      '<div class="rank">' +
        '<div class="rank__head"><span>#</span><span>Editor</span><span>Especialidade</span><span>Contribuição</span><span>Selo</span></div>' +
        RANK.map(function (r) {
          return '' +
            '<div class="rank__row' + (r.me ? ' is-me' : '') + '">' +
              '<span class="rank__pos">' + r.pos + '</span>' +
              '<div class="rank__user"><span class="ava ' + r.ava + '">' + esc(r.nome.charAt(0)) + '</span>' +
                '<div><b>' + esc(r.nome) + '</b><small>' + esc(r.handle) + '</small></div></div>' +
              '<span class="rank__cell">' + esc(r.esp) + '</span>' +
              '<span class="rank__cell"><b>' + r.ajudas + '</b> ajudas</span>' +
              '<span class="rank__badge ' + r.cls + '">' + esc(r.selo) + '</span>' +
            '</div>';
        }).join('') +
      '</div>';
  }

  /* ---------- filtros atuais ---------- */
  var fAsset = 'todos';      // biblioteca (painel)
  var fDashAsset = 'todos';  // dashboard
  var fTool = 'todas';
  var fPost = 'todos';
  var qLib = '';             // busca só da biblioteca
  var selLib = null;         // item selecionado na biblioteca
  var sortLib = 'az';        // ordenação da biblioteca

  function render() {
    var q = ($('#globalSearch') ? $('#globalSearch').value : '').toLowerCase().trim();

    // Dashboard — biblioteca
    var dashList = ASSETS.filter(function (a) {
      var okCat = fDashAsset === 'todos' || a.cat === fDashAsset;
      var okQ = !q || a.nome.toLowerCase().indexOf(q) > -1;
      return okCat && okQ;
    }).slice(0, 4);
    $('#dashAssets').innerHTML = dashList.length
      ? dashList.map(function (a) { return assetCard(a, false); }).join('')
      : '<div class="empty" style="grid-column:1/-1"><b>Nada encontrado</b>Tente outro filtro ou termo.</div>';

    // Painel biblioteca — busca local + categoria + ordenação
    var ql = qLib.toLowerCase();
    var biblio = ASSETS.filter(function (a) {
      return passaCat(a, fAsset) && bateBusca(a, ql) && bateBusca(a, q);
    });

    if (sortLib === 'za') {
      biblio.sort(function (x, y) { return y.nome.localeCompare(x.nome, 'pt-BR'); });
    } else if (sortLib === 'recent') {
      biblio.sort(function (x, y) { return y.ts - x.ts; });
    } else {
      biblio.sort(function (x, y) { return x.nome.localeCompare(y.nome, 'pt-BR'); });
    }

    var grid = $('#biblioAssets');
    if (grid) {
      grid.innerHTML = biblio.length
        ? biblio.map(function (a) { return assetCard(a, a.nome === selLib); }).join('')
        : '<div class="empty" style="grid-column:1/-1"><b>Nada encontrado</b>Ajuste a categoria ou limpe a busca da biblioteca.</div>';
    }

    // seleção: mantém o item atual visível ou marca o primeiro
    var selAchado = null;
    for (var s = 0; s < biblio.length; s++) {
      if (biblio[s].nome === selLib) { selAchado = biblio[s]; break; }
    }
    if (!selAchado && biblio.length) selAchado = biblio[0];
    selLib = selAchado ? selAchado.nome : null;

    var det = $('#libDetail');
    if (det) det.innerHTML = selAchado ? detalheHTML(selAchado) : detalheVazio();

    // contagem, título e contadores das categorias
    var filtrado = !!ql || !!q || fAsset !== 'todos';
    var cnt = $('#libCount');
    if (cnt) {
      cnt.textContent = filtrado
        ? biblio.length + ' de ' + ASSETS.length + ' itens'
        : biblio.length + ' itens';
    }
    var tit = $('#libTitle');
    if (tit) tit.textContent = CAT_NOMES[fAsset] || 'Todos os itens';

    $$('.lib__n').forEach(function (el) {
      var cat = el.getAttribute('data-n');
      var n = ASSETS.filter(function (a) {
        return passaCat(a, cat) && bateBusca(a, ql) && bateBusca(a, q);
      }).length;
      el.textContent = String(n);
    });

    // Ferramentas
    var ferr = TOOLS.filter(function (t) {
      var okCat = fTool === 'todas' || t.cat === fTool;
      var okQ = !q || t.nome.toLowerCase().indexOf(q) > -1 || t.desc.toLowerCase().indexOf(q) > -1;
      return okCat && okQ;
    });
    $('#toolGrid').innerHTML = ferr.length
      ? ferr.map(toolCard).join('')
      : '<div class="empty" style="grid-column:1/-1"><b>Nada encontrado</b>Tente outra categoria.</div>';

    // Ferramentas rápidas do dashboard
    $('#dashTools').innerHTML = TOOLS.slice(0, 5).map(function (t) {
      return '' +
        '<button class="tool-mini" data-tool="' + esc(t.nome) + '">' +
          '<span class="ico">' + t.ico + '</span><span>' + esc(t.nome.replace(' automáticas','').replace(' de formato','').replace(' inteligente','')) + '</span>' +
        '</button>';
    }).join('');

    // Kanban
    $('#dashKanban').innerHTML = kanbanHTML();
    $('#fullKanban').innerHTML = kanbanHTML();

    // Comunidade
    var posts = POSTS.filter(function (p) {
      var okType = fPost === 'todos' || p.type === fPost;
      var okQ = !q || p.titulo.toLowerCase().indexOf(q) > -1 || p.texto.toLowerCase().indexOf(q) > -1;
      return okType && okQ;
    });
    $('#feed').innerHTML = posts.length
      ? posts.map(function (p) { return postCard(p, false); }).join('')
      : '<div class="empty"><b>Nada por aqui ainda</b>Seja o primeiro a publicar nessa categoria.</div>';

    $('#dashFeed').innerHTML = POSTS.slice(0, 2).map(function (p) { return postCard(p, true); }).join('');

    // Ranking
    $('#dashRank').innerHTML = rankHTML();
    $('#fullRank').innerHTML = rankHTML();

    var pc = $('#postCount');
    if (pc) pc.textContent = String(POSTS.length);
  }

  /* =========================================================
     4. NAVEGAÇÃO
     ========================================================= */

  function irPara(id, opts) {
    opts = opts || {};
    var alvo = $('#panel-' + id);
    if (!alvo) return;

    $$('.panel').forEach(function (p) { p.classList.toggle('is-active', p === alvo); });

    // sidebar principal
    $$('.nav-btn[data-panel]').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-panel') === id);
    });
    // mobile
    $$('#mobileNav button[data-panel]').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-panel') === id);
    });

    // filtro vindo do submenu
    if (opts.cat) {
      if (id === 'biblioteca') { fAsset = opts.cat; sincronizaChips('#biblioChips', opts.cat); }
      if (id === 'ferramentas') { fTool = opts.cat; sincronizaChips('#toolChips', opts.cat); }
      if (id === 'comunidade') { fPost = opts.cat; sincronizaChips('#postChips', opts.cat); }
    }

    // breadcrumb
    var t = TITULOS[id] || ['MONTA', ''];
    $('#crumbRoot').textContent = t[0];
    $('#crumbLeaf').textContent = t[1];

    render();

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (opts.scroll) {
      var alvoScroll = $('#' + opts.scroll);
      if (alvoScroll) {
        setTimeout(function () {
          alvoScroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 260);
      }
    }

    if (history.replaceState) history.replaceState(null, '', '#' + id);
  }

  function sincronizaChips(seletor, cat) {
    $$(seletor + ' .chip').forEach(function (c) {
      c.classList.toggle('is-active', c.getAttribute('data-cat') === cat ||
        (seletor === '#postChips' && c.getAttribute('data-type') === cat));
    });
  }

  /* ---------- Submenus recolhíveis ---------- */
  $$('[data-menu]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-menu');
      var menu = $('#' + id);
      if (!menu) return;
      var open = menu.classList.toggle('is-open');
      btn.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
    });
  });

  /* ---------- Itens de navegação ---------- */
  $$('[data-panel]').forEach(function (el) {
    el.addEventListener('click', function () {
      irPara(el.getAttribute('data-panel'), {
        cat: el.getAttribute('data-cat') || undefined,
        scroll: el.getAttribute('data-scroll') || undefined
      });
      // marca item ativo do submenu
      var pai = el.closest('.submenu');
      if (pai) {
        $$('.submenu button').forEach(function (b) { b.classList.remove('is-active'); });
        el.classList.add('is-active');
      }
    });
  });

  /* ---------- data-goto ---------- */
  $$('[data-goto]').forEach(function (el) {
    el.addEventListener('click', function () {
      irPara(el.getAttribute('data-goto'), {
        scroll: el.getAttribute('data-scroll') || undefined
      });
    });
  });

  /* =========================================================
     5. FILTROS (chips)
     ========================================================= */

  function ligaChips(seletor, setter) {
    $$(seletor + ' .chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        $$(seletor + ' .chip').forEach(function (c) { c.classList.remove('is-active'); });
        chip.classList.add('is-active');
        setter(chip.getAttribute('data-cat') || chip.getAttribute('data-type'));
        render();
      });
    });
  }

  ligaChips('#dashAssetChips', function (v) { fDashAsset = v; });
  ligaChips('#biblioChips', function (v) { fAsset = v; });
  ligaChips('#toolChips', function (v) { fTool = v; });

  /* ---------- Busca local da biblioteca ---------- */
  var libBusca = $('#libSearch');
  if (libBusca) {
    libBusca.addEventListener('input', function () {
      qLib = libBusca.value.trim();
      var limpa = $('#libClear');
      if (limpa) limpa.hidden = !qLib;
      render();
    });
    libBusca.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        libBusca.value = '';
        qLib = '';
        var limpa = $('#libClear');
        if (limpa) limpa.hidden = true;
        render();
      }
    });
  }

  var libLimpa = $('#libClear');
  if (libLimpa) {
    libLimpa.addEventListener('click', function () {
      if (libBusca) libBusca.value = '';
      qLib = '';
      libLimpa.hidden = true;
      render();
      if (libBusca) libBusca.focus();
    });
  }

  /* ---------- Ordenação da biblioteca ---------- */
  var libOrdena = $('#libSort');
  if (libOrdena) {
    libOrdena.addEventListener('change', function () {
      sortLib = libOrdena.value;
      render();
    });
  }

  /* ---------- Zoom da grade ---------- */
  var libZoom = $('#libZoom');
  if (libZoom) {
    libZoom.addEventListener('input', function () {
      var libEl = $('#lib');
      if (libEl) libEl.style.setProperty('--lib-zoom', (Number(libZoom.value) / 100).toFixed(2));
    });
  }

  $$('#postChips .chip').forEach(function (chip) {
    chip.addEventListener('click', function () {
      $$('#postChips .chip').forEach(function (c) { c.classList.remove('is-active'); });
      chip.classList.add('is-active');
      fPost = chip.getAttribute('data-type');
      render();
    });
  });

  /* =========================================================
     6. AÇÕES (delegação)
     ========================================================= */

  document.addEventListener('click', function (e) {
    var el = e.target;
    if (!el.closest) return;

    // download de asset
    var dl = el.closest('[data-dl]');
    if (dl) {
      e.stopPropagation();
      toast('Download simulado', '“' + dl.getAttribute('data-dl') + '” seria baixado com a licença em PDF.');
      return;
    }

    // visualização grade/lista da biblioteca
    var lv = el.closest('[data-libview]');
    if (lv) {
      var modo = lv.getAttribute('data-libview');
      var libEl = $('#lib');
      if (libEl) libEl.classList.toggle('is-list', modo === 'list');
      $$('.lib__vbtn').forEach(function (b) { b.classList.toggle('is-active', b === lv); });
      return;
    }

    // prévia do item abre modal
    var pv = el.closest('[data-preview]');
    if (pv) {
      var nomePv = pv.getAttribute('data-preview');
      var aPv = null;
      for (var i = 0; i < ASSETS.length; i++) {
        if (ASSETS[i].nome === nomePv) { aPv = ASSETS[i]; break; }
      }
      abrirModal(nomePv, aPv ? aPv.desc + ' Licença: ' + aPv.lic + '.' : 'Prévia do item da biblioteca.');
      return;
    }

    // abrir ferramenta
    var tool = el.closest('[data-tool]');
    if (tool) {
      toast('Ferramenta aberta', '“' + tool.getAttribute('data-tool') + '” rodaria aqui de verdade na versão final.');
      return;
    }

    // item da biblioteca: seleciona (no painel) ou abre modal (no dashboard)
    var asset = el.closest('[asset], [data-asset]');
    if (asset) {
      var nomeAsset = asset.getAttribute('data-asset');
      if (asset.closest('#lib')) selecionaAsset(nomeAsset);
      else abrirModal(nomeAsset, 'Este item da biblioteca abriria a visualização com prévia, licença e botão de download.');
      return;
    }

    // curtir
    var like = el.closest('[data-like]');
    if (like) {
      var span = like.querySelector('span');
      var n = parseInt(span.textContent, 10);
      var on = like.classList.toggle('is-on');
      span.textContent = String(on ? n + 1 : n - 1);
      return;
    }
    if (el.closest('[data-comment]')) {
      toast('Respostas', 'A conversa completa abre na versão com contas de verdade.');
      return;
    }
    if (el.closest('[data-share]')) {
      toast('Link copiado', 'O endereço da publicação foi copiado.');
      return;
    }
  });

  /* ---------- Ações nomeadas ---------- */
  var acoes = {
    'em-breve': function () {
      abrirModal('Configurações', 'Preferências, conta, notificações e aparência entram na próxima etapa do protótipo.');
    },
    'ajuda': function () {
      abrirModal('Ajuda', 'Central de dúvidas, atalhos de teclado e contato com a equipe do MONTA.');
    },
    'perfil': function () {
      abrirModal('Meu perfil', 'Perfil público com portfólio, selos de contribuição e recomendações — próxima etapa.');
    },
    'tutoriais': function () {
      irPara('biblioteca', { cat: 'tutorial' });
    },
    'notificacoes': function () {
      toast('3 novas', 'Mikes respondeu sua dúvida · Ana curtiu seu corte · 1 vaga nova');
    },
    'reset-checklist': function () {
      $$('.checklist .check').forEach(function (c) {
        c.classList.remove('is-on');
        c.parentNode.classList.remove('done');
      });
      toast('Checklist reiniciado', 'Comece a conferir do zero.');
    }
  };

  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('[data-action]');
    if (!el) return;
    var fn = acoes[el.getAttribute('data-action')];
    if (fn) fn();
  });

  /* =========================================================
     7. COMUNIDADE — publicar
     ========================================================= */

  var novoTipo = 'duvida';
  $$('#typePicker button').forEach(function (b) {
    b.addEventListener('click', function () {
      $$('#typePicker button').forEach(function (x) { x.classList.remove('is-active'); });
      b.classList.add('is-active');
      novoTipo = b.getAttribute('data-type');
    });
  });

  function publicar() {
    var ta = $('#postText');
    var txt = ta.value.trim();
    if (!txt) {
      toast('Escreva algo', 'Conte uma dúvida, dica ou feedback antes de publicar.');
      ta.focus();
      return;
    }
    var titulo = txt.split('\n')[0];
    if (titulo.length > 90) titulo = titulo.slice(0, 90) + '…';
    var corpo = txt.slice(titulo.length).trim() || 'Publicado pela comunidade.';

    POSTS.unshift({
      autor:'Gabriel', handle:'@gabriel.edita', tempo:'agora',
      type:novoTipo, ava:'', titulo:titulo, texto:corpo, likes:0, comments:0
    });

    ta.value = '';
    fPost = 'todos';
    sincronizaChips('#postChips', 'todos');
    render();
    toast('Publicado', 'Sua publicação entrou no topo do feed da comunidade.');
  }

  $('#btnPostar') && $('#btnPostar').addEventListener('click', publicar);
  $('#btnPublicar') && $('#btnPublicar').addEventListener('click', function () {
    irPara('comunidade');
    setTimeout(function () { $('#postText').focus(); }, 320);
  });

  /* =========================================================
     8. CHECKLIST
     ========================================================= */

  $$('.checklist .check').forEach(function (c) {
    c.addEventListener('click', function () {
      var on = c.classList.toggle('is-on');
      c.parentNode.classList.toggle('done', on);
      var feitos = $$('.checklist .check.is-on').length;
      var total = $$('.checklist .check').length;
      if (feitos === total) toast('Pronto para enviar', 'Checklist completo. Bom trabalho, Gabriel!');
    });
  });

  /* =========================================================
     9. BUSCA GLOBAL
     ========================================================= */

  var busca = $('#globalSearch');
  if (busca) {
    busca.addEventListener('input', render);
    busca.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        var q = busca.value.trim().toLowerCase();
        if (!q) return;
        if (ASSETS.some(function (a) { return a.nome.toLowerCase().indexOf(q) > -1; })) irPara('biblioteca');
        else if (TOOLS.some(function (t) { return t.nome.toLowerCase().indexOf(q) > -1 || t.desc.toLowerCase().indexOf(q) > -1; })) irPara('ferramentas');
        else if (POSTS.some(function (p) { return p.titulo.toLowerCase().indexOf(q) > -1; })) irPara('comunidade');
      }
    });
  }

  // Ctrl+K / Cmd+K foca a busca
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (busca) { busca.focus(); busca.select(); }
    }
    if (e.key === 'Escape') fecharModal();
  });

  /* =========================================================
     10. MODAL
     ========================================================= */

  $('#modalClose') && $('#modalClose').addEventListener('click', fecharModal);
  $('#modalOk') && $('#modalOk').addEventListener('click', fecharModal);
  $('#modal') && $('#modal').addEventListener('click', function (e) {
    if (e.target === this) fecharModal();
  });

  /* =========================================================
     11. INICIALIZAÇÃO
     ========================================================= */

  render();

  var hash = (location.hash || '').replace('#', '');
  if (hash && $('#panel-' + hash)) irPara(hash);

  console.log('%cMONTA — protótipo', 'color:#7C5CFF;font-weight:bold;font-size:14px');
  console.log('Projeto de Gabriel & Mikes.');
})();
