export const createGeladeira = [
  {
    option: "nome",
    name: "Nome",
    type: "text",
    options: []
  },
  {
    option: "descricao",
    name: "Descrição",
    type: "text",
    options: []
  },
  {
    option: "preco",
    name: "Preço",
    type: "number",
    options: []
  },
  {
    option: "desconto",
    name: "Desconto (em %)",
    type: "number",
    options: []
  },
  {
    option: "cor",
    name: "Cor",
    type: "checkbox",
    options: [
      { title: "Inbox / Prata", },
      { title: "Branco", },
      { title: "Preto", },
      { title: "Cinza Acetinado", },
    ]
  },
  {
    option: "modelo",
    name: "Modelo",
    type: "select",
    options: [
      { title: "French Door" },
      { title: "Side by Side" },
      { title: "Duplex" },
      { title: "Duplex Inverse" },
      { title: "Family Hub" },
    ]
  },
  {
    option: "capacidade",
    name: "Capacidade da Geladeira (em Litros)",
    type: "number",
    options: [
      // { title: "Baixa - até 400L" },
      // { title: "Média - 400 a 500L" },
      // { title: "Alta - 500 a 600L" },
      // { title: "Super Alta - Acima de 600L" },
    ]
  },
  {
    option: "voltagem",
    name: "Voltagem",
    type: "select",
    options: [
      { title: "110 V" },
      { title: "220 V" },
      { title: "Bivolt" },
      { title: "127 ou 220 (AZ é 127 e BZ 220V)" },
    ]
  },
  {
    option: "numeroPortas",
    name: "Numero de Portas",
    type: "select",
    options: [
      { title: "1" },
      { title: "2" },
      { title: "3" },
      { title: "4" },
    ]
  },
  {
    option: "display",
    name: "Display",
    type: "select",
    options: [
      { title: "Externo" },
      { title: "Interno" },
    ]
  },
  {
    option: "puxador",
    name: "Tipo do Puxador",
    type: "select",
    options: [
      { title: "Recessivo" },
      { title: "Embutido" },
      { title: "Barra" },
    ]
  },
  {
    option: "recursos",
    name: "Recursos",
    type: "select",
    options: [
      { title: "Água e Gelo na Porta" },
      { title: "Rack de Vinhos" },
      { title: "Prateleira Dobrável / Rebatível" },
      { title: "Compartimento Flexível" },
    ]
  },
]

export const createArCondicionado = [
  {
    option: "nome",
    name: "Nome",
    type: "text",
    options: []
  },
  {
    option: "descricao",
    name: "Descrição",
    type: "text",
    options: []
  },
  {
    option: "preco",
    name: "Preço",
    type: "number",
    options: []
  },
  {
    option: "desconto",
    name: "Desconto (em %)",
    type: "number",
    options: []
  },
  {
    option: "cor",
    name: "Cor",
    type: "checkbox",
    options: [
      { title: "Branco" },
      { title: "Preto" },
      { title: "Cinza Acetinado" },
    ]
  },
  {
    option: "classe",
    name: "Classe",
    type: "select",
    options: [
      { title: "Wall Mount" },
      { title: "Floor Standing" },
      { title: "FJM" },
    ]
  },
  {
    option: "tecnologia",
    name: "Tecnologia WindFree (sem vento)",
    type: "select",
    options: [
      { title: "Sim" },
      { title: "Não" },
    ]
  },
  {
    option: "linha",
    name: "Linha WindFree",
    type: "select",
    options: [
      { title: "Design" },
      { title: "Connect" },
      { title: "Powervolt (Bivolt)" },
      { title: "Conforto" },
    ]
  },
  {
    option: "linhaUltra",
    name: "Linha Ultra",
    type: "select",
    options: [
      { title: "Convencional" },
      { title: "Digital Inverter Ultra" },
    ]
  },
  {
    option: "capacidade",
    name: "Capacidade",
    type: "number",
    options: []
  },
  {
    option: "ciclo",
    name: "Ciclo",
    type: "select",
    options: [
      { title: "Frio" },
      { title: "Quente e Frio" },
    ]
  },
]

export const createMaquinaLavar = [
  {
    option: "nome",
    name: "Nome",
    type: "text",
    options: []
  },
  {
    option: "descricao",
    name: "Descrição",
    type: "text",
    options: []
  },
  {
    option: "preco",
    name: "Preço",
    type: "number",
    options: []
  },
  {
    option: "desconto",
    name: "Desconto (em %)",
    type: "number",
    options: []
  },
  {
    option: "modelo",
    name: "Modelo",
    type: "select",
    options: [
      { title: "Máquina de Lavar" },
      { title: "Lava e Seca" },
      { title: "Secadora" },
    ]
  },
  {
    option: "capacidade",
    name: "Capacidade",
    type: "number",
    options: []
  },
  {
    option: "cor",
    name: "Cores",
    type: "checkbox",
    options: [
      { title: "Preto" },
      { title: "Branco" },
      { title: "Inbox / Prata" },
    ]
  },
  {
    option: "voltagem",
    name: "Voltagem",
    type: "select",
    options: [
      { title: "127 V" },
      { title: "220 V" },
    ]
  },
]

export const createLavaLoucas = [
  {
    option: "nome",
    name: "Nome",
    type: "text",
    options: []
  },
  {
    option: "descricao",
    name: "Descrição",
    type: "text",
    options: []
  },
  {
    option: "preco",
    name: "Preço",
    type: "number",
    options: []
  },
  {
    option: "desconto",
    name: "Desconto (em %)",
    type: "number",
    options: []
  },
  {
    option: "capacidade",
    name: "Capacidade",
    type: "number",
    options: []
  },
  {
    option: "cor",
    name: "Cores",
    type: "checkbox",
    options: [
      { title: "Preto" },
      { title: "Branco" },
      { title: "Inbox / Prata" },
    ]
  }, 
]

export const createAspirador = [
  {
    option: "nome",
    name: "Nome",
    type: "text",
    options: []
  },
  {
    option: "descricao",
    name: "Descrição",
    type: "text",
    options: []
  },
  {
    option: "preco",
    name: "Preço",
    type: "number",
    options: []
  },
  {
    option: "desconto",
    name: "Desconto (em %)",
    type: "number",
    options: []
  },
  {
    option: "cor",
    name: "Cores",
    type: "checkbox",
    options: [
      { title: "Preto" },
      { title: "Branco" },
      { title: "Inbox / Prata" },
    ]
  }, 
  {
    option: "recursos",
    name: "Recursos",
    type: "checkbox",
    options: [
      { title: "Robô Aspirador" },
      { title: "Vertical" },
    ]
  },
]

export const createCellphone = [
  {
    option: "nome",
    name: "Nome",
    type: "text",
    options: []
  },
  {
    option: "descricao",
    name: "Descrição",
    type: "text",
    options: []
  },
  {
    option: "preco",
    name: "Preço",
    type: "number",
    options: []
  },
  {
    option: "desconto",
    name: "Desconto (em %)",
    type: "number",
    options: []
  },
  {
    option: "cor",
    name: "Cor",
    type: "checkbox",
    options: [
      { title: "Inbox / Prata", },
      { title: "Branco", },
      { title: "Preto", },
      { title: "Cinza Acetinado", },
      { title: "Dourado", },
      { title: "Verde", },
      { title: "Azul Marinho", },
      { title: "Rosa", },
    ]
  },
  {
    option: "tamanhoTela",
    name: "Tamanho da Tela",
    type: "select",
    options: [
      {title: "6.0'"},
      {title: "6.1'"},
      {title: "6.2'"},
      {title: "6.3'"},
      {title: "6.4'"},
      {title: "6.5'"},
      {title: "6.6'"},
      {title: "6.7'"},
      {title: "6.8'"},
      {title: "6.9'"},
      {title: "7.0'"},
    ]
  },
  {
    option: "conectividade",
    name: "Conectividade",
    type: "select",
    options: [
      {title: "4G"},
      {title: "5G"},
    ]
  },
  {
    option: "armazenamento",
    name: "Armazenamento",
    type: "select",
    options: [
      {title: "32GB"},
      {title: "64GB"},
      {title: "128GB"},
      {title: "256GB"},
      {title: "512GB"},
      {title: "1TB"},
    ]
  },
  {
    option: "qualidadeCamera",
    name: "Qualidade da Câmera (em Megapixels)",
    type: "number",
    options: []
  },
  {
    option: "qtdCameras",
    name: "Quantidade de Câmeras",
    type: "select",
    options: [
      {title: "Duas Câmeras"},
      {title: "Três Câmeras"},
      {title: "Quatro Câmeras"},
    ]
  },
  {
    option: "faixaPreco",
    name: "Faixa de Preço",
    type: "select",
    options: [
      {title: "Acessível"},
      {title: "Intermediário"},
      {title: "Última Tecnologia"},
    ]
  },
]

export const createNotebook  = [
  {
    option: "nome",
    name: "Nome",
    type: "text",
    options: []
  },
  {
    option: "descricao",
    name: "Descrição",
    type: "text",
    options: []
  },
  {
    option: "preco",
    name: "Preço",
    type: "number",
    options: []
  },
  {
    option: "desconto",
    name: "Desconto (em %)",
    type: "number",
    options: []
  },
  {
    option: "sistema",
    name: "Sistema",
    type: "select",
    options: [
      { title: "Windows 11" },
      { title: "Windows 10" },
      { title: "MacOS" },
    ]
  },
  {
    option: "armazenamento",
    name: "Armazenamento",
    type: "select",
    options: [
      { title: "256 GB" },
      { title: "512 GB" },
      { title: "1 TB" },
      { title: "2 TB" },
    ]
  },
  {
    option: "memoria",
    name: "Memória RAM",
    type: "select",
    options: [
      { title: "4 GB" },
      { title: "8 GB" },
      { title: "16 GB" },
      { title: "32 GB" },
      { title: "64 GB" },
    ]
  },
  {
    option: "tamanhoTela",
    name: "Tamanho da Tela",
    type: "select",
    options: [
      { title: "11.0'- 12.9'" },
      { title: "13.0' - 14.9'" },
      { title: "15.6' - 16.0'" },
    ]
  },
  {
    option: "recursos",
    name: "Recursos",
    type: "checkbox",
    options: [
      { title: "Tela AMOLED" },
    ]
  },
]

export const createSmartWatch = [
  {
    option: "nome",
    name: "Nome",
    type: "text",
    options: []
  },
  {
    option: "descricao",
    name: "Descrição",
    type: "text",
    options: []
  },
  {
    option: "preco",
    name: "Preço",
    type: "number",
    options: []
  },
  {
    option: "desconto",
    name: "Desconto (em %)",
    type: "number",
    options: []
  },
  {
    option: "tamanho",
    name: "Tamanho",
    type: "select",
    options: [
      { title: "40mm" },
      { title: "42mm" },
      { title: "44mm" },
      { title: "45mm" },
      { title: "46mm" },
    ]
  },
  {
    option: "conectividade",
    name: "Conectividade",
    type: "select",
    options: [
      { title: "Bluetooth" },
      { title: "Bluetooth + 4G" },
    ]
  },
  {
    option: "material",
    name: "Material do Produto",
    type: "select",
    options: [
      { title: "Alumínio" },
      { title: "Aço Inox" },
      { title: "Titânio" },
    ]
  },
]

export const createMonitor = [
  {
    option: "nome",
    name: "Nome",
    type: "text",
    options: []
  },
  {
    option: "descricao",
    name: "Descrição",
    type: "text",
    options: []
  },
  {
    option: "preco",
    name: "Preço",
    type: "number",
    options: []
  },
  {
    option: "desconto",
    name: "Desconto (em %)",
    type: "number",
    options: []
  },
  {
    option: "tipo",
    name: "Tipo do Monitor",
    type: "select",
    options: [
      { title: "SMART Monitor" },
      { title: "Odyssey" },
      { title: "Alta Resolução" },
      { title: "Convencional" },
      { title: "Curvo" },
      { title: "Plano" },
    ]
  },
  {
    option: "tamanhoTela",
    name: "Tamanho da Tela",
    type: "select",
    options: [
      { title: "22'" },
      { title: "24-25'" },
      { title: "27-28'" },
      { title: "32-34'" },
      { title: "Acima de 49'" },
    ]
  },
  {
    option: "resolucao",
    name: "Resolução",
    type: "select",
    options: [
      { title: "FHD" },
      { title: "DFHD" },
      { title: "QHD" },
      { title: "DQHD" },
      { title: "WQHD" },
      { title: "UHD" },
    ]
  },
  {
    option: "taxaAtualizacao",
    name: "Taxa de Atualização",
    type: "select",
    options: [
      { title: "60Hz" },
      { title: "75Hz" },
      { title: "100Hz" },
      { title: "120Hz" },
      { title: "144Hz" },
      { title: "165Hz" },
      { title: "175Hz" },
      { title: "240Hz" },
    ]
  },
  {
    option: "tempoResposta",
    name: "Tempo de Resposta",
    type: "select",
    options: [
      { title: "0.03ms" },
      { title: "0.1ms" },
      { title: "1ms" },
      { title: "4ms" },
      { title: "5ms" },
      { title: "14ms" },
    ]
  },
  {
    option: "proporcao",
    name: "Proporção de Tela",
    type: "select",
    options: [
      { title: "16:9" },
      { title: "21:9" },
      { title: "32:9" },
    ]
  },
  {
    option: "recursos",
    name: "Recursos",
    type: "checkbox",
    options: [
      { title: "Alto Falante" },
      { title: "HAS" },
      { title: "Freesync" },
      { title: "Gasync" },
      { title: "SMART Hub" },
      { title: "Controle Remoto" },
      { title: "Câmera" },
    ]
  },
]

export const createTV = [
  {
    option: "nome",
    name: "Nome",
    type: "text",
    options: []
  },
  {
    option: "descricao",
    name: "Descrição",
    type: "text",
    options: []
  },
  {
    option: "preco",
    name: "Preço",
    type: "number",
    options: []
  },
  {
    option: "desconto",
    name: "Desconto (em %)",
    type: "number",
    options: []
  },
  {
    option: "tipo",
    name: "Tipo do Tela",
    type: "select",
    options: [
      { title: "Neo QLED" },
      { title: "QLED" },
      { title: "OLED" },
      { title: "Crystal UHD" },
      { title: "Gaming TV" },
    ]
  },
  {
    option: "tamanhoTela",
    name: "Tamanho da Tela",
    type: "select",
    options: [
      { title: "120 polegadas" },
      { title: "110 polegadas" },
      { title: "85 polegadas" },
      { title: "75 polegadas" },
      { title: "70 polegadas" },
      { title: "65 polegadas" },
      { title: "60 polegadas" },
      { title: "58 polegadas" },
      { title: "55 polegadas" },
      { title: "50 polegadas" },
      { title: "43 polegadas" },
      { title: "32 polegadas" },
    ]
  },
  {
    option: "tipoResolucao",
    name: "Tipo de Resolução",
    type: "select",
    options: [
      { title: "8K" },
      { title: "4K" },
      { title: "Full HD" },
      { title: "HD" },
    ]
  },
  {
    option: "recursos",
    name: "Recursos",
    type: "checkbox",
    options: [
      { title: "Pontos Quânticos" },
      { title: "Modo Game (Ultra-Wide, Menu de Jogos)" },
      { title: "Painel de 120Hz" },
      { title: "Painel de 144Hz" },
      { title: "Som em Movimento" },
      { title: "Controle Remoto SolarCell" },
    ]
  },
]

export const createTeclado = [
  {
    option: "nome",
    name: "Nome",
    type: "text",
    options: []
  },
  {
    option: "descricao",
    name: "Descrição",
    type: "text",
    options: []
  },
  {
    option: "preco",
    name: "Preço",
    type: "number",
    options: []
  },
  {
    option: "desconto",
    name: "Desconto (em %)",
    type: "number",
    options: []
  },
  {
    option: "cor",
    name: "Cor",
    type: "checkbox",
    options: [
      { title: "Preto" },
      { title: "Branco" },
      { title: "Cinza Acetinado" },
    ]
  },
  {
    option: "tipo",
    name: "Tipo do Teclado",
    type: "select",
    options: [
      { title: "Normal" },
      { title: "RGB" },
    ]
  },
  {
    option: "layout",
    name: "Layout",
    type: "select",
    options: [
      { title: "Brasileiro" },
      { title: "Internacional" },
    ]
  },
]

export const createAcessorio = [
  {
    option: "nome",
    name: "Nome",
    type: "text",
    options: []
  },
  {
    option: "descricao",
    name: "Descrição",
    type: "text",
    options: []
  },
  {
    option: "preco",
    name: "Preço",
    type: "number",
    options: []
  },
  {
    option: "desconto",
    name: "Desconto (em %)",
    type: "number",
    options: []
  },
  {
    option: "tipo",
    name: "Tipo do Produto",
    type: "select",
    options: [
      { title: "Capas para Smartphones" },
      { title: "Adaptadores e Carregadores" },
      { title: "Pulseiras para smartwatches"}, 
      { title: "Caixinhas de Som"},
      { title: "Capas para Tablets"},
      { title: "S-Pens"},
      { title: "Acessórios para TV"},
      { title: "JBL"},
    ]
  },
]
