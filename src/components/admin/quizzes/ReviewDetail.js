import { useParams } from "react-router-dom"

import Back from "../shared/Back"

export default function ReviewDetails() {
  const { id } = useParams()

  return (
    <>
      <Back path="/admin/quizzes" search="?tab=1" />

      <div>{id}</div>
    </>
  )
}