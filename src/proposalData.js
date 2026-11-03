export const proposal = {
  projectName: "Rede Brasil Solar",
  title: "Uma marca forte diante de um negócio maior.",
  subtitle:
    "Uma proposta para definir como a Rede Brasil Solar pode ampliar sua atuação sem perder o valor já construído — e materializar apenas o caminho que fizer mais sentido.",
  proposalType: "Proposta Comercial · Estratégia e Design",
  formName: "proposta-rede-brasil-solar",

  assets: {
    headerDesktop: "/assets/header-desktop.png",
    headerMobile: "/assets/header-mobile.png",
    simplexaLogo: "/assets/simplexa-logo.png",
    favicon: "/assets/favicon.svg",
  },

  nav: [
    ["contexto", "Contexto"],
    ["desafio", "O desafio"],
    ["escopo", "Proposta"],
    ["investimento", "Investimento"],
    ["cronograma", "Cronograma"],
    ["delimitacoes", "Delimitações"],
  ],

  introCard: {
    label: "Como funciona",
    title: "Estratégia + 1 caminho",
    text:
      "A estratégia é a base do projeto. A implementação segue por um único cenário: A, B ou C. Os três caminhos são alternativos e nunca se somam entre si.",
  },

  sections: {
    context: {
      id: "contexto",
      eyebrow: "Contexto",
      title: "O negócio já está crescendo para além do solar.",
      paragraphs: [
        "A Rede Brasil Solar construiu reconhecimento, presença regional e confiança em torno da energia fotovoltaica e, especialmente, do relacionamento e pós-venda.",
        "Novas soluções ligadas a aquecimento, conforto, manutenção e eficiência ampliam o negócio e entram em momentos diferentes da jornada do cliente. A questão agora não é simplesmente trocar ou manter a marca: é entender qual arquitetura permite crescer sem desperdiçar o valor já conquistado.",
      ],
    },

    diagnostic: {
      id: "desafio",
      eyebrow: "O desafio",
      title: "Preservar o presente sem limitar o futuro.",
      text:
        "Antes de criar uma nova identidade, o projeto precisa determinar qual estrutura oferece o melhor equilíbrio entre continuidade, expansão e clareza comercial.",
      cards: [
        {
          title: "Preservar",
          text: "Reconhecimento, confiança e os ativos já construídos pela Rede Brasil Solar.",
        },
        {
          title: "Organizar",
          text: "Produtos, serviços, públicos e ofertas dentro de uma arquitetura mais clara.",
        },
        {
          title: "Decidir",
          text: "Se o futuro acontece com duas marcas, uma nova marca única ou dentro da própria Rede Brasil Solar.",
        },
        {
          title: "Expressar",
          text: "Criar linguagem, organização nominativa e critérios capazes de sustentar a expansão.",
        },
      ],
      note:
        "A criação de uma nova marca é uma possibilidade do projeto, não uma conclusão antecipada.",
    },

    scope: {
      id: "escopo",
      eyebrow: "Proposta",
      title: "Uma base estratégica. Três caminhos possíveis.",
      text:
        "A estratégia é a etapa comum. A partir dela, a implementação segue por apenas um cenário. A escolha entre A, B e C é exclusiva.",
    },

    investment: {
      id: "investimento",
      eyebrow: "Investimento",
      title: "Escolha o caminho de implementação.",
      text:
        "A estratégia permanece fixa. Ao selecionar A, B ou C, o quadro financeiro atualiza o valor integral, o subsídio Sebrae e o investimento efetivo.",
      chooseLabel: "Escolha um cenário",
      totalLabel: "Valor integral",
      subsidyLabel: "Subsídio Sebrae",
      effectiveLabel: "Investimento efetivo",
      directLabel: "Pagamento direto",
      sebraeLabel: "Via Sebrae",
      installmentLabel: "Parcela do cliente via Sebrae",
      summaryButtonClosed: "Ver resumo da configuração",
      summaryButtonOpen: "Fechar resumo",
    },

    summary: {
      title: "Resumo da proposta",
      text:
        "A configuração abaixo consolida a estratégia e o caminho de implementação selecionado.",
      sendButton: "Enviar resumo",
      sendingButton: "Enviando...",
      successMessage: "Resumo enviado com sucesso.",
      errorMessage: "Não foi possível enviar agora.",
      downloadPdfButton: "Baixar PDF",
      sharePdfButton: "Compartilhar PDF",
    },

    timeline: {
      id: "cronograma",
      eyebrow: "Cronograma",
      title: "Etapas previstas",
      strategy: "4 a 6 semanas",
      scenarios: {
        cenario_a: "6 a 8 semanas após a definição estratégica",
        cenario_b: "6 a 8 semanas após a definição estratégica",
        cenario_c: "2 a 3 semanas após a definição estratégica",
      },
    },

    exclusions: {
      id: "delimitacoes",
      eyebrow: "Delimitações",
      title: "O que não está incluído",
      items: [
        "Produção ou impressão gráfica.",
        "Fabricação ou instalação de fachada e elementos de ambientação.",
        "Produção de uniformes ou execução de frota.",
        "Registro de marca no INPI, taxas e honorários jurídicos.",
        "Fotografia, vídeo, mídia ou gestão de redes sociais.",
        "Nos Cenários A e B, folders, campanhas e outros materiais promocionais podem ser contratados posteriormente.",
        "No Cenário C, a brochura/folder comercial está incluída no escopo.",
      ],
    },

    closing: {
      id: "fechamento",
      eyebrow: "Próximo passo",
      title: "Começar pela decisão certa.",
      text:
        "Com a aprovação, iniciamos pela Estratégia de Marca e Arquitetura. A partir de suas conclusões, o projeto segue pelo cenário de implementação selecionado.",
      flowTitle: "Fluxo",
      flow: [
        "Aprovação da proposta",
        "Contratação da estratégia",
        "Diagnóstico e definição da arquitetura",
        "Implementação do cenário A, B ou C",
      ],
    },
  },

  strategy: {
    id: "01",
    key: "estrategia",
    title: "Estratégia de Marca e Arquitetura",
    value: 10000,
    directPayment: 4000,
    sebraeContract: 6000,
    subsidy: 3000,
    clientViaSebrae: 3000,
    description:
      "Etapa-base para diagnosticar o momento, organizar o portfólio e definir qual arquitetura de marca deve orientar a expansão.",
    groups: [
      {
        title: "Diagnóstico",
        items: [
          "Negócio e momento atual",
          "Força e limitações da Rede Brasil Solar",
          "Novos produtos e serviços",
          "Públicos, jornadas, parceiros e canais",
          "Oportunidades e riscos",
        ],
      },
      {
        title: "Estratégia",
        items: [
          "Posicionamento e proposta de valor",
          "Públicos e prioridades",
          "Critérios de expansão",
          "Relação entre negócio atual e novas frentes",
        ],
      },
      {
        title: "Arquitetura",
        items: [
          "Arquitetura de marca",
          "Arquitetura de ofertas",
          "Organização de produtos e serviços",
          "Análise dos cenários A, B e C",
          "Recomendação estratégica",
        ],
      },
      {
        title: "Expressão verbal e nominativa",
        items: [
          "Território verbal e discurso",
          "Organização nominativa das ofertas",
          "Critérios de nomeação",
          "Territórios para eventuais novos nomes",
          "Diretrizes de evolução e transição",
        ],
      },
    ],
  },

  scenarios: [
    {
      id: "A",
      key: "cenario_a",
      title: "Nova marca complementar",
      short:
        "Criar uma nova marca para coexistir com a Rede Brasil Solar e representar o novo território de produtos e serviços.",
      value: 17000,
      directPayment: 6000,
      sebraeContract: 11000,
      subsidy: 5500,
      clientViaSebrae: 5500,
      groups: [
        {
          title: "Naming",
          items: [
            "Criação do novo nome",
            "Territórios nominativos",
            "Conceito e racional",
            "Análise preliminar de disponibilidade",
          ],
        },
        {
          title: "Marca e identidade",
          items: [
            "Marca gráfica e sistema visual",
            "Versões e assinaturas",
            "Relação com Rede Brasil Solar",
            "Manual da marca",
          ],
        },
        {
          title: "Identidade corporativa",
          items: ["Uniformes", "Frota", "Papelaria"],
        },
        {
          title: "Design ambiental",
          items: [
            "Aplicação da marca na fachada",
            "Aplicações internas",
            "Ambientação de uma sala",
          ],
        },
      ],
    },
    {
      id: "B",
      key: "cenario_b",
      title: "Nova marca única",
      short:
        "Criar um novo nome e uma nova marca para reunir as duas empresas e representar integralmente o negócio futuro.",
      value: 17000,
      directPayment: 6000,
      sebraeContract: 11000,
      subsidy: 5500,
      clientViaSebrae: 5500,
      groups: [
        {
          title: "Naming",
          items: [
            "Criação do novo nome corporativo",
            "Territórios nominativos",
            "Conceito e racional",
            "Análise preliminar de disponibilidade",
          ],
        },
        {
          title: "Marca e identidade",
          items: [
            "Marca gráfica e sistema visual",
            "Versões e assinaturas",
            "Relação de transição com Rede Brasil Solar",
            "Manual da marca",
          ],
        },
        {
          title: "Identidade corporativa",
          items: ["Uniformes", "Frota", "Papelaria"],
        },
        {
          title: "Design ambiental",
          items: [
            "Aplicação da marca na fachada",
            "Aplicações internas",
            "Ambientação de uma sala",
          ],
        },
      ],
    },
    {
      id: "C",
      key: "cenario_c",
      title: "Evolução dentro da Rede Brasil Solar",
      short:
        "Manter a Rede Brasil Solar como marca principal, organizar os novos serviços dentro dela e materializar a nova oferta em uma peça comercial.",
      value: 3200,
      directPayment: 0,
      sebraeContract: 3200,
      subsidy: 1600,
      clientViaSebrae: 1600,
      groups: [
        {
          title: "Implementação da arquitetura",
          items: [
            "Adequação final da arquitetura de ofertas",
            "Organização e hierarquia dos novos serviços",
            "Aplicação da expressão verbal e nominativa",
            "Organização do discurso comercial",
          ],
        },
        {
          title: "Material promocional",
          items: [
            "Design de brochura/folder institucional e comercial",
            "Apresentação da Rede Brasil Solar e do novo portfólio",
            "Estrutura para benefícios, diferenciais e chamadas comerciais",
          ],
        },
      ],
    },
  ],

  sebrae: {
    rate: 0.5,
    installmentsCount: 12,
    note:
      "O subsídio de 50% incide somente sobre a parcela contratada via Sebrae. O saldo de responsabilidade da empresa nessa parcela pode ser pago em até 12x no cartão via Sebrae.",
  },
};
