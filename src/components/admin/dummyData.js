export const users = [
  {
    "id": 1,
    "first_name": "John",
    "last_name": "Smith",
    "email": "john_smith@fake.com",
    "password": "c5ba039c317364219207a0c3da2189",
    "role": "admin"
  },
  {
    "id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane_smith@fake.com",
    "password": "7c5ba039c31364219207a0c3da2189",
    "role": "candidate"
  },
  {
    "id": 3,
    "first_name": "Sarah",
    "last_name": "Key",
    "email": "sarah_key@fake.com",
    "password": "da2187c5ba039c31364219207a0c39",
    "role": "candidate"
  },
]

export const quizzes = [
  {
    "id": 1,
    "title": "Front-end General Knowledge",
    "duration": "45",
    "questions": [
      {"id": 1},
      {"id": 2}
    ],
  }
]

export const quiz = {
  "id": 1,
  "title": "Front-end General Knowledge",
  "duration": "45",
  "questions": [
    {"id": 1},
    {"id": 2}
  ],
}

export const reviews = [
  {
    "id": "7c5ba039c31364219207a0c3da2189",
    "start": Date.now(),
    "end": Date.now(),
    "status": "passed",
  },
  {
    "id": "c5ba039c317364219207a0c3da2189",
    "start": Date.now(),
    "end": Date.now(),
    "status": "failed",
  },
  {
    "id": "9c3173642192c5ba0307a0c3da2189",
    "start": Date.now(),
    "end": Date.now(),
    "status": "unrevised",
  }
]

export const review = {
  "id": 1,
  "title": "Front-end General Knowledge",
  "duration": "45",
  "questions": [
    {"id": 1},
    {"id": 2}
  ],
}