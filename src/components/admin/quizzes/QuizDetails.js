import { useParams } from "react-router-dom"

import Back from "../shared/Back"

import QuizForm from "./QuizForm"

import { quizzes } from "../dummyData"

export default function QuizDetails() {
  const { id } = useParams()

  return (
    <>
      <Back path="/admin/quizzes" />

      <QuizForm quiz={{ ...quizzes[0], id: id }} />
    </>
  )
}
