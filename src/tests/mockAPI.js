
export const token = {
  "response_code": 0,
  "response_message": "Token Generated Successfully!",
  "token": "f00cb469ce38726ee00a7c6836761b0a4fb808181a125dcde6d50a9f3c9127b6"
};

export const player = {
  player: {
    name: '',
    assertions: 0,
    score: 0,
    gravatarEmail: '',
  }
}

export const playerGames = {
  player: {
    name: 'pessoa',
    assertions: 3,
    score: 125,
    url: 'url_da_pessoa',
    gravatarEmail: 'test@test.com'
  },
  isLoading: true,
  score: 0,
  assertions: 0,
  nQuestion: 0,
  timer: 30,
  showAnswer: false,
  disabled: false,
  response: false,
  questions: {},
}



export const playersInfo = {
  ranking: [
    {
      name: 'NomePessoa',
      score: 150,
      picture: 'url_da_foto_da_pessoa',
    },
    {
      name: 'OutraPessoa',
      score: 100,
      picture: 'url_da_foto_da__de_outr_pessoa',
    }
  ],
};

export const anotherPlayerInfo = {
  ranking: [
    {
      name: 'AnotherPessoa',
      score: 200,
      picture: 'url_da_foto_da_pessoa_de_novo',
    }
  ],
};

export const secundResults = {
  response_code: 0,
  results: [
    {
      "category": "Geography",
      "type": "boolean",
      "difficulty": "easy",
      "question": "The Republic of Malta is the smallest microstate worldwide.",
      "correct_answer": "False",
      "incorrect_answers": [
        "True"
      ]
    },
    {
      "category": "Science & Nature",
      "type": "multiple",
      "difficulty": "hard",
      "question": "In quantum physics, which of these theorised sub-atomic particles has yet to be observed?",
      "correct_answer": "Graviton",
      "incorrect_answers": [
        "Z boson",
        "Tau neutrino",
        "Gluon"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Generally, which component of a computer draws the most power?",
      "correct_answer": "Video Card",
      "incorrect_answers": [
        "Hard Drive",
        "Processor",
        "Power Supply"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What is the most expensive weapon in Counter-Strike: Global Offensive?",
      "correct_answer": "Scar-20/G3SG1",
      "incorrect_answers": [
        "M4A1",
        "AWP",
        "R8 Revolver"
      ]
    },
    {
      "category": "Entertainment: Japanese Anime & Manga",
      "type": "multiple",
      "difficulty": "hard",
      "question": "Who was the Author of the manga Uzumaki?",
      "correct_answer": "Junji Ito",
      "incorrect_answers": [
        "Noboru Takahashi",
        "Akira Toriyama",
        "Masashi Kishimoto",
      ],
    },
  ],
}