import AnimatedPage from "../../AnimatedPage"
import { motion } from "framer-motion"

import useCard from "../../../hooks/useCard"

import { useParams } from "react-router-dom"

import Back from "../shared/Back"

import {
  AtSymbolIcon,
  ChevronUpIcon,
  ClipboardCopyIcon,
  ClockIcon,
  CollectionIcon,
  CubeIcon,
  CubeTransparentIcon,
  DuplicateIcon,
  ScissorsIcon,
  TemplateIcon,
  UserIcon
} from "@heroicons/react/outline"

import { reviews } from "../dummyData"

const variants = {
  open: { rotate: 180 },
  closed: { rotate: 0 }
}

export default function ReviewDetails() {
  const { id } = useParams()
  const [itemCardOpen, toggleCard] = useCard()

  return (
    <>
      <Back path="/admin/quizzes" search="?tab=1" />

      <AnimatedPage>
        <section className="relative block pt-1 pb-4 bg-gray-50 dark:bg-gray-700 rounded overflow-hidden">
          <div className="relative bg-white dark:bg-gray-800 shadow mx-4 mt-4 px-4 py-5 sm:rounded-lg sm:p-6 z-10">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="flex flex-col content-between md:col-span-1">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Test Review</h3>
                  <p className="mt-1 text-sm text-indigo-500 break-words">{reviews[0].user.id}</p>
                  <div className="space-y-1 divide-y divide-gray-300 dark:divide-gray-700">
                    <div className="space-y-1 py-1.5">
                      <div className="flex items-center text-sm text-gray-500">
                        <TemplateIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                        <span className="font-light dark:text-gray-400">{reviews[0].quiz.title}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <CollectionIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                        <span className="font-light dark:text-gray-400">2 question(s)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <ClockIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                        <span className="font-light dark:text-gray-400">{reviews[0].end - reviews[0].start + 46} minutes</span>
                      </div>
                    </div>
                    <div className="space-y-1 py-2.5">
                      <div className="flex items-center text-sm text-gray-500">
                        <ClipboardCopyIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                        <span className="font-light dark:text-gray-400">Copy Actions - 1</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <DuplicateIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                        <span className="font-light dark:text-gray-400">Paste Actions - 2</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <ScissorsIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                        <span className="font-light dark:text-gray-400">Cut Actions - 2</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <CubeIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                        <span className="font-light dark:text-gray-400">Idle Inside - 0 mins</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <CubeTransparentIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                        <span className="font-light dark:text-gray-400">Idle Outside - 0 mins</span>
                      </div>
                    </div>
                    <div className="space-y-1 py-2.5">
                      <div className="flex items-center text-sm font-medium text-gray-800 bg-gray-50 dark:bg-gray-700 p-2 rounded">
                        <span className="ml-1 dark:text-white">User Info</span>
                        <motion.div
                          onClick={() => toggleCard()}
                          className="ml-2 flex-shrink-0 cursor-pointer"
                          animate={itemCardOpen ? "open" : "closed"}
                          variants={variants}
                          whileHover={{ scale: 1.1 }}
                        >
                          <ChevronUpIcon className="h-5 w-5 text-gray-400 pointer-events-none" aria-hidden="true" />
                        </motion.div>
                      </div>
                      <div>
                        {itemCardOpen && (
                          <div className="bg-gray-50 dark:bg-gray-700 p-2 rounded">
                            <div className="flex items-center text-sm text-gray-500">
                              <UserIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                              <span className="font-light dark:text-gray-300">
                                {reviews[0].user.first_name} {reviews[0].user.last_name}
                              </span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <AtSymbolIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                              <span className="font-light dark:text-gray-300">{reviews[0].user.email}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center md:justify-start mt-2 md:mt-20">
                  <span className="relative z-0 inline-flex shadow-sm rounded-md">
                    <button
                      type="button"
                      className={`relative inline-flex items-center px-4 py-2 rounded-l-md border text-sm text-gray-700 dark:text-white font-medium focus:z-10 focus:outline-none ${
                        reviews[2].status === "passed"
                          ? "bg-green-300 border-green-300 text-white"
                          : "bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border-gray-300 dark:border-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                      }`}
                    >
                      Pass
                    </button>
                    <button
                      type="button"
                      className={`-ml-px relative inline-flex items-center px-4 py-2 border text-sm font-medium text-gray-700 dark:text-white focus:z-10 focus:outline-none ${
                        reviews[2].status === "unrevised"
                          ? "bg-indigo-700 border-indigo-700 text-white"
                          : "bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border-gray-300 dark:border-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                      }`}
                    >
                      Unrevised
                    </button>
                    <button
                      type="button"
                      className={`-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border text-sm font-medium text-gray-700 dark:text-white focus:z-10 focus:outline-none ${
                        reviews[2].status === "failed"
                          ? "bg-gray-300 border-gray-300 text-white cursor-default"
                          : "bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border-gray-300 dark:border-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                      }`}
                    >
                      Fail
                    </button>
                  </span>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2 space-y-4">
                {reviews[0].quiz.questions.map((question, index) => {
                  return (
                    <div key={question.id}>
                      <span className="text-sm text-gray-700 dark:text-gray-100">
                        <span className="text-indigo-500">{index + 1}.</span> {question.title}
                      </span>

                      <div className="p-2 bg-gray-50 dark:bg-gray-700 dark:text-white text-sm rounded">{question.answer}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </AnimatedPage>
    </>
  )
}
