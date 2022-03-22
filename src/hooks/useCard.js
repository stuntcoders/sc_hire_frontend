import { useState } from "react"

export default function useCard(initialMode = false) {
  const [cardOpen, setCardOpen] = useState(initialMode)
  const toggle = () => setCardOpen(!cardOpen)

  return [cardOpen, toggle]
}
