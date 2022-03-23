import AnimatedPage from "../../AnimatedPage"
import { motion } from "framer-motion"

import { useState } from "react"
import useQuestionList from "../../../hooks/useQuestionList"

import { CollectionIcon, ClockIcon } from "@heroicons/react/outline"

import Question from "./Question"

const animations = {
  initial: { opacity: 0, x: -80 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
}

export default function QuizForm({ quiz }) {
  const [questionList, addQuestion, removeQuestion] = useQuestionList()
  const [selectedOption, setSelectedOption] = useState("checkbox")

  return (
    <AnimatedPage>
      <section className="relative block pt-1 pb-4 bg-gray-50 dark:bg-gray-700 rounded overflow-hidden">
        <div className="absolute top-0 -right-96 w-screen h-screen bg-indigo-500 -rotate-45"></div>

        <motion.div
          className="relative bg-white dark:bg-gray-800 shadow mx-4 mt-4 px-4 py-5 sm:rounded-lg sm:p-6 z-10"
          variants={animations}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6 }}>
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">{quiz.id ? "Edit" : "Create"} Quiz</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-indigo-500">{quiz.title}</p>
              <div className="space-y-1 mt-1">
                <div className="flex items-center text-sm text-gray-500">
                  <CollectionIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                  <span className="font-light dark:text-gray-400">{questionList.length} question(s)</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <ClockIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                  <span className="font-light dark:text-gray-400">{questionList.length * 5} minutes</span>
                </div>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-4">
                    <label htmlFor={`title-${quiz.id}`} className="block text-sm font-medium text-gray-700 dark:text-white">
                      Quiz Title
                    </label>
                    <input
                      type="text"
                      name={`title-${quiz.id}`}
                      id={`title-${quiz.id}`}
                      autoComplete="off"
                      className="mt-1 dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm dark:text-white border-gray-300 dark:border-none rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                    <label htmlFor={`duration-${quiz.id}`} className="block text-sm font-medium text-gray-700 dark:text-white">
                      Duration <span className="italic font-light">(in minutes)</span>
                    </label>
                    <input
                      type="number"
                      name={`duration-${quiz.id}`}
                      id={`duration-${quiz.id}`}
                      autoComplete="off"
                      min={0}
                      step={5}
                      className="mt-1 dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm dark:text-white border-gray-300 dark:border-none rounded-md"
                    />
                  </div>

                  {!quiz.id && (
                    <>
                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor={`quiz-${quiz.id}`} className="block text-sm font-medium text-gray-700 dark:text-white">
                          Question Type
                        </label>
                        <select
                          value={selectedOption}
                          onChange={e => setSelectedOption(e.target.value)}
                          id={`quiz-${quiz.id}`}
                          name={`quiz-${quiz.id}`}
                          autoComplete="off"
                          className="mt-1 dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm dark:text-white border-gray-300 dark:border-none rounded-md">
                          <option value="checkbox">Checkbox</option>
                          <option value="code">Code</option>
                          <option value="radio">Radio</option>
                          <option value="text">Text Area</option>
                        </select>
                      </div>

                      <div className="flex col-span-6 sm:col-span-2 items-end">
                        <motion.button
                          onClick={() => addQuestion({ type: selectedOption })}
                          type="button"
                          className="items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          whileHover={{ scale: 1.05 }}>
                          Add Question
                        </motion.button>
                      </div>

                      <div className={`relative grid grid-cols-3 col-span-6 gap-x-6 shadow ${questionList.length && "p-4 bg-white dark:bg-gray-700 rounded"}`}>
                        {questionList.map((question, index) => {
                          return <Question index={index} type={question.type} removeQuestion={removeQuestion} key={index} />
                        })}
                      </div>
                    </>
                  )}
                </div>
                <div className="px-4 pt-3 text-right sm:px-6">
                  <motion.button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    whileHover={{ scale: 1.05 }}>
                    Save
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </section>
    </AnimatedPage>
  )
}
