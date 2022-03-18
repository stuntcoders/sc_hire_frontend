import { useParams } from "react-router-dom"

import Back from "../shared/Back"

import QuizForm from "./QuizForm"

export default function QuizDetails() {
  const { id } = useParams()

  let quiz = {
      "id": id,
      "title": "Front-end General Knowledge",
      "duration": "45",
      "questions": [
        {"id": 1},
        {"id": 2}
      ],
    }

  return (
    <>
      <Back path="/admin/quizzes" />

      <QuizForm quiz={quiz} />
    </>
  )
}
