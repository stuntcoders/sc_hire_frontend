import useCard from "../../../hooks/useCard"
import useTab from "../../../hooks/useTab"

import TestForm from "./TestForm.js"
import Test from "./Test"

import { ChevronRightIcon } from "@heroicons/react/outline"
import { ReactComponent as Polygon } from "../../../assets/shapes/polygon.svg"

export default function Tests() {
  const [itemCardOpen, toggleCard] = useCard()
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
          <span className="inline-flex self-center w-16 h-px ml-2 mt-2 bg-indigo-500"></span>
        </li>
        <li className={ `flex items-end ${itemTabOpen === 1 ? "text-3xl font-light text-gray-800 dark:text-gray-50" : "text-2xl font-extralight text-gray-400 dark:text-gray-500"}` }
            onClick={() => toggleTab(1)}
        >
          <span className="cursor-pointer">
            Assigned
          </span>
        </li>
      </ul>

      {itemTabOpen === 0 ?
        <>
          <section className={`relative bg-gray-50 dark:bg-white rounded overflow-hidden shadow z-10 ${itemCardOpen ? "pb-4" : "px-6"}`}>
            <h2 className={`relative text-sm font-medium z-10 ${itemCardOpen ? "hidden" : "py-2"}`}>
              Create test
            </h2>
            <Polygon fill="#bbf7d0" className="absolute top-0 right-0" />
            <span onClick={() => toggleCard()} className={`absolute top-2.5 right-6 text-gray-400 hover:text-white cursor-pointer z-10 ${itemCardOpen ? "hidden" : ""}`}>
              <ChevronRightIcon className="h-5 w-5 pointer-events-none"/>
            </span>

            { itemCardOpen ? <TestForm test={{}} toggleCard={toggleCard} /> : <></> }
          </section>

          <section className="relative bg-white shadow overflow-hidden rounded my-6 z-10">
            <ul className="divide-y divide-gray-100 dark:divide-gray-200">
              {tests.map((test) => (
                <Test test={test} key={test.id} />
              ))}
            </ul>
          </section>
        </>
      : ""}
    </>
  )
}