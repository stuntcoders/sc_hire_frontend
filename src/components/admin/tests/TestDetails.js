import { useParams } from "react-router-dom"

import Back from "../shared/Back"

import TestForm from "./TestForm"

export default function TestDetails() {
  const { id } = useParams()

  let test = {
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
      <Back path="/admin/tests" />

      <TestForm test={test} />
    </>
  )
}
