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
    name: "Desconto",
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
    option: "numPortas",
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
    option: "setNome",
    name: "Nome",
    type: "text",
    options: []
  },
  {
    option: "setDescricao",
    name: "Descrição",
    type: "text",
    options: []
  },
  {
    option: "setPreco",
    name: "Preço",
    type: "number",
    options: []
  },
  {
    option: "setDesconto",
    name: "Desconto",
    type: "number",
    options: []
  },
  {
    option: "setCor",
    name: "Cor",
    type: "checkbox",
    options: [
      { title: "Branca" },
      { title: "Preto" },
      { title: "Cinza Acetinado" },
    ]
  },
  {
    option: "setClasse",
    name: "Classe",
    type: "select",
    options: [
      { title: "Wall Mount" },
      { title: "Floor Standing" },
      { title: "FJM" },
    ]
  },
  {
    option: "setTecnologia",
    name: "Tecnologia WindFree (sem vento)",
    type: "select",
    options: [
      { title: "Sim" },
      { title: "Não" },
    ]
  },
  {
    option: "setLinha",
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
    option: "setUltra",
    name: "Linha Ultra",
    type: "select",
    options: [
      { title: "Convencional" },
      { title: "Digital Inverter Ultra" },
    ]
  },
  {
    option: "setCapacidade",
    name: "Capacidade",
    type: "select",
    options: [
      { title: "5.000 a 10.000" },
      { title: "7.000 a 10.000" },
      { title: "11.000 a 15.000" },
      { title: "16.000 a 20.000" },
      { title: "21.000 a 30.000" },
      { title: "31.000 a 50.000" },
    ]
  },
  {
    option: "setCiclo",
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
    option: "setNome",
    name: "Nome",
    type: "text",
    options: []
  },
  {
    option: "setDescricao",
    name: "Descrição",
    type: "text",
    options: []
  },
  {
    option: "setPreco",
    name: "Preço",
    type: "number",
    options: []
  },
  {
    option: "setDesconto",
    name: "Desconto",
    type: "number",
    options: []
  },
  {
    option: "setModelo",
    name: "Modelo",
    type: "select",
    options: [
      { title: "Máquina de Lavar" },
      { title: "Lava e Seca" },
      { title: "Secadora" },
    ]
  },
  {
    option: "setCapacidade",
    name: "Capacidade",
    type: "select",
    options: [
      { title: "Até 10kg" },
      { title: "de 10.1 até 15kg" },
      { title: "Acima de 15.1kg" },
    ]
  },
  {
    option: "setCores",
    name: "Cores",
    type: "select",
    options: [
      { title: "Black" },
      { title: "Branca" },
      { title: "Inox Look" },
    ]
  },
  {
    option: "Voltagem",
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
    option: "setNome",
    name: "Nome",
    type: "text",
    options: []
  },
  {
    option: "setDescricao",
    name: "Descrição",
    type: "text",
    options: []
  },
  {
    option: "setPreco",
    name: "Preço",
    type: "number",
    options: []
  },
  {
    option: "setDesconto",
    name: "Desconto",
    type: "number",
    options: []
  },
  {
    option: "setCapacidade",
    name: "Capacidade",
    type: "select",
    options: [
      { title: "10 serviços" },
      { title: "14 serviços" },
    ]
  },
  
]

export const createAspirador = [
  {
    option: "setNome",
    name: "Nome",
    type: "text",
    options: []
  },
  {
    option: "setDescricao",
    name: "Descrição",
    type: "text",
    options: []
  },
  {
    option: "setPreco",
    name: "Preço",
    type: "number",
    options: []
  },
  {
    option: "setDesconto",
    name: "Desconto",
    type: "number",
    options: []
  },
  {
    option: "setRecursos",
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
    option: "setNome",
    name: "Nome",
    type: "text",
    options: []
  },
  {
    option: "setDescricao",
    name: "Descrição",
    type: "text",
    options: []
  },
  {
    option: "setPreco",
    name: "Preço",
    type: "number",
    options: []
  },
  {
    option: "setDesconto",
    name: "Desconto",
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
    option: "setTamanhoTela",
    name: "Tamanho da Tela",
    type: "select",
    options: [
      {title: "6.0' - 6.2'"},
      {title: "6.3' - 6.5'"},
      {title: "6.6' - 6.9'"},
      {title: "7.0'"},
    ]
  },
  {
    option: "setConectividade",
    name: "Conectividade",
    type: "select",
    options: [
      {title: "4G"},
      {title: "5G"},
    ]
  },
  {
    option: "setArmazenamento",
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
    option: "setQualidadeCamera",
    name: "Qualidade da Câmera",
    type: "select",
    options: [
      {title: "4.9MP"},
      {title: "9 - 12.9MP"},
      {title: "13 - 18MP"},
      {title: "19 - 23MP"},
      {title: "24 - 199MP"},
      {title: "+ 200MP"},
    ]
  },
  {
    option: "setQtdCameras",
    name: "Quantidade de Câmeras",
    type: "select",
    options: [
      {title: "Duas Câmeras"},
      {title: "Três Câmeras"},
      {title: "Quatro Câmeras"},
    ]
  },
  {
    option: "setFaixaPreco",
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
    option: "setNome",
    name: "Nome",
    type: "text",
    options: []
  },
  {
    option: "setDescricao",
    name: "Descrição",
    type: "text",
    options: []
  },
  {
    option: "setPreco",
    name: "Preço",
    type: "number",
    options: []
  },
  {
    option: "setDesconto",
    name: "Desconto",
    type: "number",
    options: []
  },
  {
    option: "setSistema",
    name: "setSistema",
    type: "select",
    options: [
      { title: "Windows 11" },
      { title: "Windows 10" },
      { title: "MacOS" },
    ]
  },
  {
    option: "setArmazenamento",
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
    option: "setMemoria",
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
    option: "setTamanhoTela",
    name: "Tamanho da Tela",
    type: "select",
    options: [
      { title: "11.0'- 12.9'" },
      { title: "13.0' - 14.9'" },
      { title: "15.6' - 16.0'" },
    ]
  },
  {
    option: "setRecursos",
    name: "Recursos",
    type: "checkbox",
    options: [
      { title: "Tela AMOLED" },
    ]
  },
]

export const createSmartWatch = [
  {
    option: "setNome",
    name: "Nome",
    type: "text",
    options: []
  },
  {
    option: "setDescricao",
    name: "Descrição",
    type: "text",
    options: []
  },
  {
    option: "setPreco",
    name: "Preço",
    type: "number",
    options: []
  },
  {
    option: "setDesconto",
    name: "Desconto",
    type: "number",
    options: []
  },
  {
    option: "setTamanho",
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
    option: "setConectividade",
    name: "Conectividade",
    type: "select",
    options: [
      { title: "Bluetooth" },
      { title: "Bluetooth + 4G" },
    ]
  },
  {
    option: "setMaterial",
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
    option: "setNome",
    name: "Nome",
    type: "text",
    options: []
  },
  {
    option: "setDescricao",
    name: "Descrição",
    type: "text",
    options: []
  },
  {
    option: "setPreco",
    name: "Preço",
    type: "number",
    options: []
  },
  {
    option: "setDesconto",
    name: "Desconto",
    type: "number",
    options: []
  },
  {
    option: "setTipo",
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
    option: "setTamanhoTela",
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
    option: "setResolucao",
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
    option: "setTaxaAtualizacao",
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
    option: "setTempoResposta",
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
    option: "setProporcao",
    name: "Proporção de Tela",
    type: "select",
    options: [
      { title: "16:9" },
      { title: "21:9" },
      { title: "32:9" },
    ]
  },
  {
    option: "setRecursos",
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
    option: "setNome",
    name: "Nome",
    type: "text",
    options: []
  },
  {
    option: "setDescricao",
    name: "Descrição",
    type: "text",
    options: []
  },
  {
    option: "setPreco",
    name: "Preço",
    type: "number",
    options: []
  },
  {
    option: "setDesconto",
    name: "Desconto",
    type: "number",
    options: []
  },
  {
    option: "setTipo",
    name: "Tipo do Monitor",
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
    option: "setTamanhoTela",
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
    option: "setTipoResolucao",
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
    option: "setRecursos",
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
    option: "setNome",
    name: "Nome",
    type: "text",
    options: []
  },
  {
    option: "setDescricao",
    name: "Descrição",
    type: "text",
    options: []
  },
  {
    option: "setPreco",
    name: "Preço",
    type: "number",
    options: []
  },
  {
    option: "setDesconto",
    name: "Desconto",
    type: "number",
    options: []
  },
  {
    option: "setCor",
    name: "Cor",
    type: "select",
    options: [
      { title: "Preto" },
      { title: "Branco" },
      { title: "Cinza Acetinado" },
    ]
  },
  {
    option: "setTipo",
    name: "Tipo do Teclado",
    type: "select",
    options: [
      { title: "Normal" },
      { title: "RGB" },
    ]
  },
  {
    option: "setLayout",
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
    option: "setNome",
    name: "Nome",
    type: "text",
    options: []
  },
  {
    option: "setDescricao",
    name: "Descrição",
    type: "text",
    options: []
  },
  {
    option: "setPreco",
    name: "Preço",
    type: "number",
    options: []
  },
  {
    option: "setDesconto",
    name: "Desconto",
    type: "number",
    options: []
  },
  {
    option: "setTipo",
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
