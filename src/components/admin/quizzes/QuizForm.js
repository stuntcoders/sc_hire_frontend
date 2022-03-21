import { useState } from "react"
import useQuestionList from "../../../hooks/useQuestionList"

import { ReactComponent as PolygonRight } from "../../../assets/shapes/polygon_right.svg"
import { CollectionIcon, ClockIcon } from "@heroicons/react/outline"

import Question from "./Question"

export default function QuizForm({ quiz }) {
  const [questionList, addQuestion, removeQuestion] = useQuestionList()
  const [selectedOption, setSelectedOption] = useState("checkbox")

  return (
    <section className="relative block pt-1 pb-4 bg-gray-50 dark:bg-white rounded overflow-hidden">
      <PolygonRight fill="#bbf7d0" className="absolute top-0 right-0" />

      <div className="relative bg-white dark:bg-gray-50 shadow mx-4 mt-4 px-4 py-5 sm:rounded-lg sm:p-6 z-10">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              { quiz.id ? "Edit" : "Create"} Quiz
            </h3>
            <p className="mt-1 text-sm text-gray-500">{quiz.title}</p>
            <div className="space-y-1 mt-1">
              <div className="flex items-center text-sm text-gray-500">
                <CollectionIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                <span className="font-light">
                  {questionList.length} question(s)
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <ClockIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                <span className="font-light">
                  {questionList.length * 5} minutes
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor={`title-${quiz.id}`} className="block text-sm font-medium text-gray-700">
                    Quiz Title
                  </label>
                  <input
                    type="text"
                    name={`title-${quiz.id}`}
                    id={`title-${quiz.id}`}
                    autoComplete="off"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-2">
                  <label htmlFor={`duration-${quiz.id}`} className="block text-sm font-medium text-gray-700">
                    Duration <span className="italic font-light">(in minutes)</span>
                  </label>
                  <input
                    type="number"
                    name={`duration-${quiz.id}`}
                    id={`duration-${quiz.id}`}
                    autoComplete="off"
                    min={0}
                    step={5}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                {!quiz.id && <>
                  <div className="col-span-6 sm:col-span-4">
                    <label htmlFor={`quiz-${quiz.id}`} className="block text-sm font-medium text-gray-700">
                      Question Type
                    </label>
                    <select
                      value={selectedOption}
                      onChange={e => setSelectedOption(e.target.value)}
                      id={`quiz-${quiz.id}`}
                      name={`quiz-${quiz.id}`}
                      autoComplete="off"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option value="checkbox">Checkbox</option>
                      <option value="code">Code</option>
                      <option value="radio">Radio</option>
                      <option value="text">Text Area</option>
                    </select>
                  </div>

                  <div className="flex col-span-6 sm:col-span-2 items-end">
                    <button
                      onClick={() => addQuestion({ type: selectedOption })}
                      type="button"
                      className="items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Add Question
                    </button>
                  </div>

                  <div className={`grid grid-cols-3 col-span-6 gap-x-6 space-y-4 shadow ${questionList.length && "p-4 bg-white rounded"}`}>
                    {questionList.map((question, index) => {
                      return (
                        <Question index={index} type={question.type} removeQuestion={removeQuestion} key={index} />
                      );
                    })}
                  </div>
                </>
              }
              </div>
              <div className="px-4 pt-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
