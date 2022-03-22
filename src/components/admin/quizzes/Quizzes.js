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
  let query = useQuery();

  useEffect(() => {
    let tab = query.get("tab")

    if (tab) {
      toggleTab(1)
    }
  }, []);

  const tabs = [
    { title: "Templates" },
    { title: "Reviews" },
    { title: "New Quiz" }
  ]

  return(
    <AnimatedPage>
      <PageNav tabs={tabs} tabOpen={itemTabOpen} toggleTab={toggleTab} />

      {itemTabOpen === 0 &&
        <>
          <section className="relative bg-white shadow overflow-hidden rounded z-10">
            <ul className="bg-gray-50 dark:bg-gray-700 divide-y divide-gray-100 dark:divide-gray-600">
              {quizzes.map((quiz) => (
                <Quiz quiz={quiz} key={quiz.id} />
              ))}
            </ul>
          </section>
        </>
      }

      {itemTabOpen === 1 &&
        <>
          <section className="relative bg-white shadow overflow-hidden rounded z-10">
            <ul className="bg-gray-50 dark:bg-gray-700 divide-y divide-gray-100 dark:divide-gray-600">
              {reviews.map((review) => (
                <Review review={review} key={review.id} />
              ))}
            </ul>
          </section>
        </>
      }

      {itemTabOpen === 2 && <QuizForm quiz={{}} />}
    </AnimatedPage>
  )
}