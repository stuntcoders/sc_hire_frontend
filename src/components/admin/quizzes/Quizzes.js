import AnimatedPage from "../../AnimatedPage"

import { useEffect } from "react"
import useTab from "../../../hooks/useTab"
import useQuery from "../../../hooks/useQuery"

import PageNav from "../shared/PageNav"
import Quiz from "./Quiz"
import QuizForm from "./QuizForm"
import Review from "./Review"

import { quizzes, reviews } from "../dummyData"

export default function Quizzes() {
  const [itemTabOpen, toggleTab] = useTab()
  let query = useQuery()

  useEffect(() => {
    let tab = query.get("tab")

    if (tab) {
      toggleTab(1)
    }
  }, [])

  const tabs = [{ title: "Templates" }, { title: "Reviews" }, { title: "New Quiz" }]

  return (
    <AnimatedPage>
      <PageNav tabs={tabs} tabOpen={itemTabOpen} toggleTab={toggleTab} />

      {itemTabOpen === 0 && (
        <section className="relative z-10 overflow-hidden rounded bg-white shadow dark:bg-gray-700">
          <ul className="divide-y divide-gray-100 bg-gray-50 dark:divide-gray-600 dark:bg-gray-700">
            {quizzes.map(quiz => (
              <Quiz quiz={quiz} key={quiz.id} />
            ))}
          </ul>
        </section>
      )}

      {itemTabOpen === 1 && (
        <section className="relative z-10 overflow-hidden rounded bg-white shadow dark:bg-gray-700">
          <ul className="divide-y divide-gray-100 bg-gray-50 dark:divide-gray-600 dark:bg-gray-700">
            {reviews.map(review => (
              <Review review={review} key={review.id} />
            ))}
          </ul>
        </section>
      )}

      {itemTabOpen === 2 && <QuizForm quiz={{}} />}
    </AnimatedPage>
  )
}
