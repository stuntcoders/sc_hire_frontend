export const users = [
  {
    id: 1,
    first_name: "John",
    last_name: "Smith",
    email: "john_smith@fake.com",
    password: "c5ba039c317364219207a0c3da2189",
    role: "admin",
  },
  {
    id: 2,
    first_name: "Jane",
    last_name: "Smith",
    email: "jane_smith@fake.com",
    password: "7c5ba039c31364219207a0c3da2189",
    role: "candidate",
  },
  {
    id: 3,
    first_name: "Sarah",
    last_name: "Key",
    email: "sarah_key@fake.com",
    password: "da2187c5ba039c31364219207a0c39",
    role: "candidate",
  },
]

export const quizzes = [
  {
    id: 1,
    title: "Front-end General Knowledge",
    duration: "45",
    questions: [{ id: 1 }, { id: 2 }],
  },
]

export const reviews = [
  {
    id: 1,
    start: Date.now(),
    end: Date.now(),
    status: "passed",
    user: {
      id: "7c5ba039c31364219207a0c3da2189",
      first_name: "Jane",
      last_name: "Smith",
      email: "jane_smith@fake.com",
    },
    quiz: {
      id: 1,
      title: "Front-end General Knowledge",
      duration: "45",
      questions: [
        { id: 1, type: "text", title: "With CSS Grid Layout, we get a new flexible unit, can you name that unit?", answer: "Fr" },
        { id: 2, type: "radio", title: "In PHP can private members be overridden?", answer: "No" },
        {
          id: 3,
          type: "code",
          title: "Please write a simple method that determines if the given number N is a prime number?",
          answer: "function primeNumber ($number)",
        },
        { id: 4, type: "checkbox", title: "Select Node.js frameworks.", answer: "Nest.js, Koa.js, Angular" },
      ],
    },
  },
  {
    id: 2,
    start: Date.now(),
    end: Date.now(),
    status: "failed",
    user: {
      id: "c5ba039c317364219207a0c3da2189",
      first_name: "John",
      last_name: "Smith",
      email: "john_smith@fake.com",
    },
  },
  {
    id: 3,
    start: Date.now(),
    end: Date.now(),
    status: "unrevised",
    user: {
      id: "da2187c5ba039c31364219207a0c39",
      first_name: "Sarah",
      last_name: "Key",
      email: "sarah_key@fake.com",
    },
  },
]
