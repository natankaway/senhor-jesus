// Dados mockados expandidos
export const mockData = {
 planos: [
  // Unidade Centro
  { id: 1, nome: 'Plano Básico (2x/semana)', preco: 120.00, unidade: 'Centro' },
  { id: 2, nome: 'Plano Intermediário (3x/semana)', preco: 150.00, unidade: 'Centro' },
  { id: 3, nome: 'Plano Avançado (Livre)', preco: 180.00, unidade: 'Centro' },
  
  // Unidade Zona Sul
  { id: 4, nome: 'Plano Básico (2x/semana)', preco: 150.00, unidade: 'Zona Sul' },
  { id: 5, nome: 'Plano Intermediário (3x/semana)', preco: 180.00, unidade: 'Zona Sul' },
  { id: 6, nome: 'Plano Avançado (Livre)', preco: 220.00, unidade: 'Zona Sul' },
  
  // Unidade Zona Norte
  { id: 7, nome: 'Plano Básico (2x/semana)', preco: 110.00, unidade: 'Zona Norte' },
  { id: 8, nome: 'Plano Intermediário (3x/semana)', preco: 140.00, unidade: 'Zona Norte' },
  { id: 9, nome: 'Plano Avançado (Livre)', preco: 170.00, unidade: 'Zona Norte' },
  
  // Unidade Barra
  { id: 10, nome: 'Plano Básico (2x/semana)', preco: 160.00, unidade: 'Barra' },
  { id: 11, nome: 'Plano Intermediário (3x/semana)', preco: 190.00, unidade: 'Barra' },
  { id: 12, nome: 'Plano Avançado (Livre)', preco: 230.00, unidade: 'Barra' },
],
alunos: [
  { 
    id: 1, 
    nome: 'João Silva', 
    telefone: '(11) 99999-9999', 
    email: 'joao@email.com', 
    tipoPlano: 'plataforma', // 🆕 Usar plataforma
    plataformaParceira: 'Wellhub', // 🆕 Plataforma utilizada
    unidade: 'Centro', // 🆕 Unidade do aluno
    status: 'ativo', 
    vencimento: '2025-07-15', 
    senha: '123456', 
    nivel: 'intermediario', 
    dataMatricula: '2024-01-15', 
    objetivo: 'Competição' 
  },
  { 
    id: 2, 
    nome: 'Maria Santos', 
    telefone: '(11) 88888-8888', 
    email: 'maria@email.com', 
    tipoPlano: 'mensalidade', // 🆕 Mensalidade normal
    planoId: 1, 
    unidade: 'Zona Sul', // 🆕 Unidade do aluno
    status: 'ativo', 
    vencimento: '2025-07-20', 
    senha: '123456', 
    nivel: 'iniciante', 
    dataMatricula: '2024-03-20', 
    objetivo: 'Lazer' 
  },
  { 
    id: 3, 
    nome: 'Pedro Costa', 
    telefone: '(11) 77777-7777', 
    email: 'pedro@email.com', 
    tipoPlano: 'mensalidade', // 🆕 Mensalidade normal
    planoId: 3, 
    unidade: 'Zona Norte', // 🆕 Unidade do aluno
    status: 'pendente', 
    vencimento: '2025-07-10', 
    senha: '123456', 
    nivel: 'avancado', 
    dataMatricula: '2023-11-10', 
    objetivo: 'Fitness' 
  },
  { 
    id: 4, 
    nome: 'Ana Oliveira', 
    telefone: '(11) 66666-6666', 
    email: 'ana@email.com', 
    tipoPlano: 'plataforma', // 🆕 Usar plataforma
    plataformaParceira: 'TotalPass', // 🆕 Plataforma utilizada
    unidade: 'Barra', // 🆕 Unidade do aluno
    status: 'ativo', 
    vencimento: '2025-08-01', 
    senha: '123456', 
    nivel: 'intermediario', 
    dataMatricula: '2024-02-05', 
    objetivo: 'Competição' 
  }
],
 professores: [
    { 
      id: 1, 
      nome: 'Carlos Mendes', 
      telefone: '(11) 91111-1111', 
      email: 'carlos@email.com', 
      senha: '123456',
      tipoPagamento: 'variavel', // 🆕 Novo campo
      valoresVariaveis: { // 🆕 Novo campo
        uma: 25,
        duas: 22,
        tres: 20
      },
      especialidades: ['Futevôlei de Praia', 'Técnicas de Defesa', 'Treinamento Avançado'], // 🆕
      experiencia: '5-10', // 🆕
      observacoes: 'Professor experiente, especialista em defesa', // 🆕
      ativo: true
    },
    { 
      id: 2, 
      nome: 'Lucas Ferreira', 
      telefone: '(11) 92222-2222', 
      email: 'lucas@email.com', 
      senha: '123456',
      tipoPagamento: 'fixo', // 🆕 Novo campo
      valorFixo: 45, // 🆕 Novo campo
      especialidades: ['Fundamentos Básicos', 'Treinamento Iniciantes'], // 🆕
      experiencia: '1-3', // 🆕
      observacoes: 'Ótimo com iniciantes, muito didático', // 🆕
      ativo: true
    },
    { 
      id: 3, 
      nome: 'Ana Paula Costa', 
      telefone: '(11) 93333-3333', 
      email: 'anapaula@email.com', 
      senha: '123456',
      tipoPagamento: 'variavel', // 🆕 Novo campo
      valoresVariaveis: { // 🆕 Novo campo
        uma: 30,
        duas: 25,
        tres: 22
      },
      especialidades: ['Técnicas de Ataque', 'Competições', 'Condicionamento Físico'], // 🆕
      experiencia: '10+', // 🆕
      observacoes: 'Ex-atleta profissional, especialista em alto rendimento', // 🆕
      ativo: true
    }
  ],
  financeiro: [
    { id: 1, alunoId: 1, aluno: 'João Silva', valor: 150, data: '2025-07-05', status: 'pago', tipo: 'receita', metodo: 'mensalidade', descricao: 'Mensalidade Julho' },
    { id: 2, alunoId: 2, aluno: 'Maria Santos', valor: 120, data: '2025-07-03', status: 'pago', tipo: 'receita', metodo: 'mensalidade', descricao: 'Mensalidade Julho' },
    { id: 3, alunoId: 3, aluno: 'Pedro Costa', valor: 180, data: '2025-07-01', status: 'pendente', tipo: 'receita', metodo: 'mensalidade', descricao: 'Mensalidade Julho' },
    { id: 4, alunoId: 4, aluno: 'Ana Oliveira', valor: 50, data: '2025-07-06', status: 'pago', tipo: 'receita', metodo: 'diaria-dinheiro', descricao: 'Diária avulsa' },
    { id: 5, valor: 500, data: '2025-07-01', status: 'pago', tipo: 'despesa', metodo: 'aluguel', descricao: 'Aluguel Quadra' },
    { id: 6, valor: 45.50, data: '2025-07-02', status: 'pago', tipo: 'receita', metodo: 'diaria-plataforma', descricao: 'Wellhub (Gympass)' },
  ],
  treinos: [
    { 
      id: 1, 
      titulo: 'Treino de Defesa 2x2', 
      professorId: 1, 
      professor: 'Carlos Mendes', 
      data: '2025-07-01', 
      descricao: 'Foco em recepção de saque e posicionamento defensivo.', 
      duracao: 60, 
      nivel: 'intermediario',
      // NOVO CAMPO: Guarda o estado da prancheta para este treino
      pranchetaData: {
        items: [
          { id: 101, type: 'player1', x: 150, y: 200 },
          { id: 102, type: 'player1', x: 350, y: 200 },
          { id: 103, type: 'player2', x: 250, y: 500 },
          { id: 104, type: 'ball', x: 250, y: 450 },
        ]
      }
    },
    { 
      id: 2, 
      titulo: 'Ataque e Finalização', 
      professorId: 1, 
      professor: 'Carlos Mendes', 
      data: '2025-07-02', 
      descricao: 'Técnicas de ataque, cortadas e pingo.', 
      duracao: 90, 
      nivel: 'avancado',
      pranchetaData: {
        items: [
          { id: 201, type: 'player1', x: 150, y: 200 },
          { id: 202, type: 'ball', x: 160, y: 250 },
          { id: 203, type: 'arrow', fromX: 160, fromY: 250, toX: 250, toY: 100, color: '#ef4444' },
        ]
      }
    },
    { 
      id: 3, 
      titulo: 'Fundamentos Básicos', 
      professorId: 2, 
      professor: 'Lucas Ferreira', 
      data: '2025-07-03', 
      descricao: 'Manchete, toque e saque para iniciantes.', 
      duracao: 45, 
      nivel: 'iniciante',
      pranchetaData: {
        items: [
          { id: 301, type: 'player1', x: 250, y: 200 },
          { id: 302, type: 'text', text: 'Posição Base', x: 250, y: 150, color: '#000000', fontSize: 16, style: 'bold' }
        ]
      }
    }
  ],
  unidades: [
    { id: 1, nome: 'CT Copacabana', endereco: 'Praia de Copacabana, Rio de Janeiro - RJ', telefone: '(21) 99999-9999', email: 'copacabana@boraporct.com', responsavel: 'Carlos Mendes', ativo: true },
    { id: 2, nome: 'CT Ipanema', endereco: 'Praia de Ipanema, Rio de Janeiro - RJ', telefone: '(21) 88888-8888', email: 'ipanema@boraporct.com', responsavel: 'Ana Paula Costa', ativo: true }
  ],
  produtos: [
    { id: 1, nome: 'Camisa Oficial BoraProCT', preco: 89.90, imagem: 'https://placehold.co/400x400/004AAD/FFFFFF?text=Camisa' },
    { id: 2, nome: 'Boné Exclusivo', preco: 49.90, imagem: 'https://placehold.co/400x400/333333/FFFFFF?text=Boné' },
    { id: 3, nome: 'Viseira Futevôlei', preco: 39.90, imagem: 'https://placehold.co/400x400/FF5733/FFFFFF?text=Viseira' },
    { id: 4, nome: 'Bola Mikasa FT-5', preco: 299.90, imagem: 'https://placehold.co/400x400/FFC300/000000?text=Bola' },
  ],
  // 🆕 Gestores das unidades
  gestores: [
    { 
      id: 1, 
      nome: 'Roberto Silva', 
      telefone: '(21) 97777-7777', 
      email: 'roberto.centro@boraporct.com', 
      senha: '123456',
      unidadeResponsavel: 'Centro',
      dataAdmissao: '2024-01-10',
      ativo: true
    },
    { 
      id: 2, 
      nome: 'Marina Costa', 
      telefone: '(21) 96666-6666', 
      email: 'marina.zonasul@boraporct.com', 
      senha: '123456',
      unidadeResponsavel: 'Zona Sul',
      dataAdmissao: '2024-02-15',
      ativo: true
    },
    { 
      id: 3, 
      nome: 'Fernando Santos', 
      telefone: '(21) 95555-5555', 
      email: 'fernando.zonanorte@boraporct.com', 
      senha: '123456',
      unidadeResponsavel: 'Zona Norte',
      dataAdmissao: '2024-03-20',
      ativo: true
    },
    { 
      id: 4, 
      nome: 'Luciana Oliveira', 
      telefone: '(21) 94444-4444', 
      email: 'luciana.barra@boraporct.com', 
      senha: '123456',
      unidadeResponsavel: 'Barra',
      dataAdmissao: '2024-04-01',
      ativo: true
    }
  ],
  plataformas: [
    { id: 1, nome: 'Wellhub (Gympass)', valorPorAluno: 45.50, ativo: true },
    { id: 2, nome: 'TotalPass', valorPorAluno: 42.00, ativo: true },
    { id: 3, nome: 'Plataforma X', valorPorAluno: 50.00, ativo: false },
  ],
  presencas: [
    // Professor Carlos (ID: 1) - Sistema variável
    { id: 1, alunoId: 1, professorId: 1, data: '2025-07-05', horario: '18:00', status: 'presente' },
    { id: 2, alunoId: 2, professorId: 1, data: '2025-07-05', horario: '19:00', status: 'presente' },
    { id: 3, alunoId: 3, professorId: 1, data: '2025-07-05', horario: '20:00', status: 'presente' }, // 3 aulas = R$ 20 cada
    
    // Professor Lucas (ID: 2) - Sistema fixo
    { id: 4, alunoId: 1, professorId: 2, data: '2025-07-06', horario: '17:00', status: 'presente' }, // R$ 45
    { id: 5, alunoId: 4, professorId: 2, data: '2025-07-06', horario: '18:00', status: 'presente' }, // R$ 45
    
    // Professor Ana Paula (ID: 3) - Sistema variável
    { id: 6, alunoId: 2, professorId: 3, data: '2025-07-07', horario: '19:00', status: 'presente' }, // 1 aula = R$ 30
    { id: 7, alunoId: 3, professorId: 3, data: '2025-07-08', horario: '17:00', status: 'presente' },
    { id: 8, alunoId: 1, professorId: 3, data: '2025-07-08', horario: '18:00', status: 'presente' }, // 2 aulas = R$ 25 cada
  ],
  horariosConfiguracao: {
    1: { // Unidade 1 - CT Copacabana
      segunda: [
        { id: 1, horario: '17:00', professorId: 1, maxAlunos: 8, ativo: true },
        { id: 2, horario: '18:00', professorId: 1, maxAlunos: 8, ativo: true },
        { id: 3, horario: '19:00', professorId: 2, maxAlunos: 6, ativo: true }
      ],
      terca: [
        { id: 4, horario: '17:00', professorId: 3, maxAlunos: 8, ativo: true },
        { id: 5, horario: '18:00', professorId: 3, maxAlunos: 8, ativo: true }
      ],
      // ... outros dias
    }
  }
};