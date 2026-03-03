const armasComuns = [
  {
    nome: 'Vento dos Deuses',
    imgs: [
      '../../img/Armas/ArmasNormais/vento+0.png',
      '../../img/Armas/ArmasNormais/vento+10.png',
      '../../img/Armas/ArmasNormais/vento+12.png',
      '../../img/Armas/ArmasNormais/vento_gold.png',
      '../../img/Armas/ArmasNormais/vento_b3.png'
    ]
  },
  {
    nome: 'Cesto de frutas',
    imgs: [
      '../../img/Armas/ArmasNormais/cesto+0.png',
      '../../img/Armas/ArmasNormais/cesto+10.png',
      '../../img/Armas/ArmasNormais/cesto+12.png',
      '../../img/Armas/ArmasNormais/cesto_gold.png',
      '../../img/Armas/ArmasNormais/cesto_b3.png'
    ]
  },
  {
    nome: 'Ventosa',
    imgs: [
      '../../img/Armas/ArmasNormais/ventosa+0.png',
      '../../img/Armas/ArmasNormais/ventosa+10.png',
      '../../img/Armas/ArmasNormais/ventosa+12.png',
      '../../img/Armas/ArmasNormais/ventosa_gold.png',
      '../../img/Armas/ArmasNormais/ventosa_b3.png'
    ]
  },
  {
    nome: 'Trovão',
    imgs: [
      '../../img/Armas/ArmasNormais/trovao+0.png',
      '../../img/Armas/ArmasNormais/trovao+10.png',
      '../../img/Armas/ArmasNormais/trovao+12.png',
      '../../img/Armas/ArmasNormais/trovao_gold.png',
      '../../img/Armas/ArmasNormais/trovao_b3.png'
    ]
  },
  {
    nome: 'Fogo Intenso',
    imgs: [
      '../../img/Armas/ArmasNormais/fogo+0.png',
      '../../img/Armas/ArmasNormais/fogo+10.png',
      '../../img/Armas/ArmasNormais/fogo+12.png',
      '../../img/Armas/ArmasNormais/fogo_gold.png',
      '../../img/Armas/ArmasNormais/fogo_b3.png'
    ]
  },
  {
    nome: 'Eletrodoméstico',
    imgs: [
      '../../img/Armas/ArmasNormais/eletro+0.png',
      '../../img/Armas/ArmasNormais/eletro+10.png',
      '../../img/Armas/ArmasNormais/eletro+12.png',
      '../../img/Armas/ArmasNormais/eletro_gold.png',
      '../../img/Armas/ArmasNormais/eletro_b3.png'
    ]
  },
  {
    nome: 'Canhão arco-íris',
    imgs: [
      '../../img/Armas/ArmasNormais/canhao+0.png',
      '../../img/Armas/ArmasNormais/canhao+10.png',
      '../../img/Armas/ArmasNormais/canhao+12.png',
      '../../img/Armas/ArmasNormais/canhao_gold.png',
      '../../img/Armas/ArmasNormais/canhao_b3.png'
    ]
  },
  {
    nome: 'Kit médico',
    imgs: [
      '../../img/Armas/ArmasNormais/kit+0.png',
      '../../img/Armas/ArmasNormais/kit+10.png',
      '../../img/Armas/ArmasNormais/kit+12.png',
      '../../img/Armas/ArmasNormais/kit_gold.png',
      '../../img/Armas/ArmasNormais/kit_b3.png'
    ]
  },
  {
    nome: 'Quebra Tijolos',
    imgs: [
      '../../img/Armas/ArmasNormais/quebra+0.png',
      '../../img/Armas/ArmasNormais/quebra+10.png',
      '../../img/Armas/ArmasNormais/quebra+12.png',
      '../../img/Armas/ArmasNormais/quebra_gold.png',
      '../../img/Armas/ArmasNormais/quebra_b3.png'
    ]
  }
]

const armasRaras = [
  {
    nome: 'Chick louco',
    imgs: [
      '../../img/Armas/ArmasRaras/chick+0.png',
      '../../img/Armas/ArmasRaras/chick+10.png',
      '../../img/Armas/ArmasRaras/chick+12.png',
      '../../img/Armas/ArmasRaras/chick_gold.png',
      '../../img/Armas/ArmasRaras/chick_b3.png'
    ]
  },
  {
    nome: 'Lança da antiguidade',
    imgs: [
      '../../img/Armas/ArmasRaras/lanca+0.png',
      '../../img/Armas/ArmasRaras/lanca+10.png',
      '../../img/Armas/ArmasRaras/lanca+12.png',
      '../../img/Armas/ArmasRaras/lanca_gold.png',
      '../../img/Armas/ArmasRaras/lanca_b3.png'
    ]
  },
  {
    nome: 'Cabeça de boi',
    imgs: [
      '../../img/Armas/ArmasRaras/cabeca+0.png',
      '../../img/Armas/ArmasRaras/cabeca+10.png',
      '../../img/Armas/ArmasRaras/cabeca+12.png',
      '../../img/Armas/ArmasRaras/cabeca_gold.png',
      '../../img/Armas/ArmasRaras/cabeca_b3.png'
    ]
  },
  {
    nome: 'Bummerang do amor',
    imgs: [
      '../../img/Armas/ArmasRaras/bummer+0.png',
      '../../img/Armas/ArmasRaras/bummer+10.png',
      '../../img/Armas/ArmasRaras/bummer+12.png',
      '../../img/Armas/ArmasRaras/bummer_gold.png',
      '../../img/Armas/ArmasRaras/bummer_b3.png'
    ]
  },
]

let armasAtuais = armasComuns
let idx = 0

const titulo = document.getElementById('armaTitulo')

const imgs = [
  document.getElementById('armaImg1'),
  document.getElementById('armaImg2'),
  document.getElementById('armaImg3'),
  document.getElementById('armaImg4'),
  document.getElementById('armaImg5')
]

function render() {
  if (!armasAtuais.length) {
    titulo.textContent = 'Sem armas cadastradas'
    for (const imgEl of imgs) {
      imgEl.removeAttribute('src')
      imgEl.alt = ''
    }
    return
  }

  const arma = armasAtuais[idx]
  titulo.textContent = arma.nome

  for (let i = 0; i < imgs.length; i++) {
    imgs[i].src = arma.imgs[i] || ''
  }
}

function next() {
  if (!armasAtuais.length) return
  idx = (idx + 1) % armasAtuais.length
  render()
}

function prev() {
  if (!armasAtuais.length) return
  idx = (idx - 1 + armasAtuais.length) % armasAtuais.length
  render()
}

function setTipo(tipo) {
  armasAtuais = tipo === 'raras' ? armasRaras : armasComuns
  idx = 0
  render()

  const btnC = document.getElementById('btnComuns')
  const btnR = document.getElementById('btnRaras')

  if (btnC && btnR) {
    btnC.classList.toggle('ativo', tipo !== 'raras')
    btnR.classList.toggle('ativo', tipo === 'raras')
  }
}

document.getElementById('armaNext').addEventListener('click', next)
document.getElementById('armaPrev').addEventListener('click', prev)

const btnComuns = document.getElementById('btnComuns')
const btnRaras = document.getElementById('btnRaras')

if (btnComuns && btnRaras) {
  btnComuns.addEventListener('click', () => setTipo('comuns'))
  btnRaras.addEventListener('click', () => setTipo('raras'))
}

render()