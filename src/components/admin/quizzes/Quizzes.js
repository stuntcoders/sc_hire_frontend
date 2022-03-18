import { useEffect } from "react"
import useTab from "../../../hooks/useTab"
import useQuery from "../../../hooks/useQuery"

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
    }
  ]

  return(
    <>
      <ul className="flex mb-2 space-x-2">
        <li className={ `flex items-end ${itemTabOpen === 0 ? "text-3xl font-light text-gray-800 dark:text-gray-50" : "text-2xl font-extralight text-gray-400 dark:text-gray-500"}` }
            onClick={() => toggleTab(0)}
        >
          <span className="cursor-pointer">
            Templates
          </span>
          <span className={`inline-flex self-center w-16 h-px ml-2 mt-2 ${itemTabOpen === 0 ? "bg-indigo-500" : "bg-gray-300 dark:bg-gray-600"}`}></span>
        </li>
        <li className={ `flex items-end ${itemTabOpen === 1 ? "text-3xl font-light text-gray-800 dark:text-gray-50" : "text-2xl font-extralight text-gray-400 dark:text-gray-500"}` }
            onClick={() => toggleTab(1)}
        >
          <span className="cursor-pointer">
            Review
          </span>
          <span className={`inline-flex self-center w-16 h-px ml-2 mt-2 ${itemTabOpen === 1 ? "bg-indigo-500" : "bg-gray-300 dark:bg-gray-600"}`}></span>
        </li>
        <li className={ `flex items-end ${itemTabOpen === 2 ? "text-3xl font-light text-gray-800 dark:text-gray-50" : "text-2xl font-extralight text-gray-400 dark:text-gray-500"}` }
            onClick={() => toggleTab(2)}
        >
          <span className="cursor-pointer">
            New Quiz
          </span>
        </li>
      </ul>

      {itemTabOpen === 0 &&
        <>
          <section className="relative bg-white shadow overflow-hidden rounded z-10">
            <ul className="divide-y divide-gray-100 dark:divide-gray-200">
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
            <ul className="divide-y divide-gray-100 dark:divide-gray-200">
              {reviews.map((review) => (
                <Review review={review} key={review.id} />
              ))}
            </ul>
          </section>
        </>
      }

      {itemTabOpen === 2 && <QuizForm quiz={{}} />}
    </>
  )
}