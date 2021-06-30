export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Criar back end do clone trello',
          labels: ['#7159c1'],
          user: ''
        },
        {
          id: 2,
          content: 'Estudar hospedagem heroku',
          labels: ['#7159c1'],
          user: ''
        },
        {
          id: 3,
          content: 'subir sistema no heroku',
          labels: ['#7159c1'],
          user: ''
        },
        {
          id: 4,
          content: 'Estudar docker',
          labels: ['#54e1f7'],
          user: ''
        },
        {
          id: 5,
          content: 'Criar sistema de docker para aplicacao',
          labels: ['#54e1f7'],
          user: ''
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Trello',
          labels: [],
          user: ''
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Personalizar caixas no front',
          labels: ['#7159c1'],
          user: ''
        },
        {
          id: 8,
          content: 'Adcionar estimativas paras as task',
          labels: ['#54e1f7'],
          user: ''
        },
        {
          id: 9,
          content: 'Refatorar codigo',
          labels: [],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Criar aplicacaçao clone do trello',
          labels: [],
        },
        {
          id: 12,
          content: 'Garantir que esta tudo funcional',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Entregar ',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}