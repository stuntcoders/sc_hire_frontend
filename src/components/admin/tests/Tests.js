import useTab from "../../../hooks/useTab"

import Test from "./Test"
import TestForm from "./TestForm"

export default function Tests() {
  const [itemTabOpen, toggleTab] = useTab()

  let tests = [
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

  return(
    <>
      <ul className="flex mb-2 space-x-2">
        <li className={ `flex items-end ${itemTabOpen === 0 ? "text-3xl font-light text-gray-800 dark:text-gray-50" : "text-2xl font-extralight text-gray-400 dark:text-gray-500"}` }
            onClick={() => toggleTab(0)}
        >
          <span className="cursor-pointer">
            Templates
          </span>
          <span className={`inline-flex self-center w-16 h-px ml-2 mt-2 ${itemTabOpen === 0 ? "bg-indigo-500" : "bg-gray-600"}`}></span>
        </li>
        <li className={ `flex items-end ${itemTabOpen === 1 ? "text-3xl font-light text-gray-800 dark:text-gray-50" : "text-2xl font-extralight text-gray-400 dark:text-gray-500"}` }
            onClick={() => toggleTab(1)}
        >
          <span className="cursor-pointer">
            Assigned
          </span>
          <span className={`inline-flex self-center w-16 h-px ml-2 mt-2 ${itemTabOpen === 1 ? "bg-indigo-500" : "bg-gray-600"}`}></span>
        </li>
        <li className={ `flex items-end ${itemTabOpen === 2 ? "text-3xl font-light text-gray-800 dark:text-gray-50" : "text-2xl font-extralight text-gray-400 dark:text-gray-500"}` }
            onClick={() => toggleTab(2)}
        >
          <span className="cursor-pointer">
            New Test
          </span>
        </li>
      </ul>

      {itemTabOpen === 0 ?
        <>
          <section className="relative bg-white shadow overflow-hidden rounded my-6 z-10">
            <ul className="divide-y divide-gray-100 dark:divide-gray-200">
              {tests.map((test) => (
                <Test test={test} key={test.id} />
              ))}
            </ul>
          </section>
        </>
        : <></>}

      {itemTabOpen === 2 ?
        <TestForm test={{}} />
        : <></>}
    </>
  )
}