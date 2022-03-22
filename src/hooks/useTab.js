import { useState } from "react"

export default function useTab(initialTab = 0) {
  const [tabOpen, setTabOpen] = useState(initialTab)
  const toggle = index => {
    setTabOpen(index)
  }

  return [tabOpen, toggle]
}
