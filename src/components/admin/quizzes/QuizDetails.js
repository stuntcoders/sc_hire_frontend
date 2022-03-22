import { useParams } from "react-router-dom"

import Back from "../shared/Back"

import QuizForm from "./QuizForm"

import { quiz } from "../dummyData"

export default function QuizDetails() {
  const { id } = useParams()

  return (
    <>
      <Back path="/admin/quizzes" />

      <QuizForm quiz={{ ...quiz, id: id }} />
    </>
  )
}
