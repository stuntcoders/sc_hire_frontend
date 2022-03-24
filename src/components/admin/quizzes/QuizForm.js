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
      <section className="relative block overflow-hidden rounded bg-gray-50 pt-1 pb-4 dark:bg-gray-700">
        <div className="absolute top-0 -right-96 h-screen w-screen -rotate-45 bg-indigo-500"></div>

        <motion.div
          className="relative z-10 mx-4 mt-4 bg-white px-4 py-5 shadow dark:bg-gray-800 sm:rounded-lg sm:p-6"
          variants={animations}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6 }}
        >
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">{quiz.id ? "Edit" : "Create"} Quiz</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-indigo-500">{quiz.title}</p>
              <div className="mt-1 space-y-1">
                <div className="flex items-center text-sm text-gray-500">
                  <CollectionIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                  <span className="font-light dark:text-gray-400">{questionList.length} question(s)</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <ClockIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                  <span className="font-light dark:text-gray-400">{questionList.length * 5} minutes</span>
                </div>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
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
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-transparent dark:bg-gray-700 dark:text-white sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                    <label htmlFor={`duration-${quiz.id}`} className="block text-sm font-medium text-gray-700 dark:text-white">
                      Duration <span className="font-light italic">(in minutes)</span>
                    </label>
                    <input
                      type="number"
                      name={`duration-${quiz.id}`}
                      id={`duration-${quiz.id}`}
                      autoComplete="off"
                      min={0}
                      step={5}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-transparent dark:bg-gray-700 dark:text-white sm:text-sm"
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
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-transparent dark:bg-gray-700 dark:text-white sm:text-sm"
                        >
                          <option value="checkbox">Checkbox</option>
                          <option value="code">Code</option>
                          <option value="radio">Radio</option>
                          <option value="text">Text Area</option>
                        </select>
                      </div>

                      <div className="col-span-6 flex items-end sm:col-span-2">
                        <motion.button
                          onClick={() => addQuestion({ type: selectedOption })}
                          type="button"
                          className="items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          Add Question
                        </motion.button>
                      </div>

                      <div className={`relative col-span-6 grid grid-cols-3 gap-x-6 shadow ${questionList.length && "rounded bg-white p-4 dark:bg-gray-700"}`}>
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
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    whileHover={{ scale: 1.05 }}
                  >
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
