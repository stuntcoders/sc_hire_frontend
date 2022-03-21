import { useState } from "react"

export default function useQuestionList() {
  const [questionList, setQuestionList] = useState([])

  const addQuestion = (question) => {
    setQuestionList([...questionList, question])
  }

  const removeQuestion = index => {
    const list = [...questionList]
    list.splice(index, 1)
    setQuestionList(list)
  }

  return [questionList, addQuestion, removeQuestion]
}