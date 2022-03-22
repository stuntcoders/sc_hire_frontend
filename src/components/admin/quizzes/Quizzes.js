import AnimatedPage from "../../AnimatedPage"

import { useEffect } from "react"
import useTab from "../../../hooks/useTab"
import useQuery from "../../../hooks/useQuery"

import PageNav from "../shared/PageNav"
import Quiz from "./Quiz"
import QuizForm from "./QuizForm"
import Review from "./Review"

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

  let quizzes = [
    {
      "id": 1,
      "title": "Front-end General Knowledge",
      "duration": "45",
      "questions": [
        {"id": 1},
        {"id": 2}
      ],
    }
  ]

  let reviews = [
    {
      "id": "7c5ba039c31364219207a0c3da2189",
      "start": Date.now(),
      "end": Date.now(),
      "status": "passed",
    },
    {
      "id": "c5ba039c317364219207a0c3da2189",
      "start": Date.now(),
      "end": Date.now(),
      "status": "failed",
    },
    {
      "id": "9c3173642192c5ba0307a0c3da2189",
      "start": Date.now(),
      "end": Date.now(),
      "status": "unrevised",
    }
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