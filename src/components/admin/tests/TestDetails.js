import { useParams } from "react-router-dom"

export default function TestDetails() {
  const { id } = useParams()

  return (
    <div>Test {id}</div>
  )
}
