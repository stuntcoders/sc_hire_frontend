import { useParams } from "react-router-dom"

import Back from "../shared/Back"

export default function ReviewDetails() {
  const { id } = useParams()

  let review = {
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
      <Back path="/admin/quizzes" search="?tab=1" />

      <div>{id}</div>
    </>
  )
}