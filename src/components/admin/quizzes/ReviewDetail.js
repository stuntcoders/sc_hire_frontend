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
        <section className="relative block overflow-hidden rounded bg-gray-50 pt-1 pb-4 dark:bg-gray-700">
          <div className="relative z-10 mx-4 mt-4 bg-white px-4 py-5 shadow dark:bg-gray-800 sm:rounded-lg sm:p-6">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="flex flex-col content-between md:col-span-1">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">Test Review</h3>
                  <p className="mt-1 break-words text-sm text-indigo-500">{reviews[0].user.id}</p>
                  <div className="space-y-1 divide-y divide-gray-300 dark:divide-gray-700">
                    <div className="space-y-1 py-1.5">
                      <div className="flex items-center text-sm text-gray-500">
                        <TemplateIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                        <span className="font-light dark:text-gray-400">{reviews[0].quiz.title}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <CollectionIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                        <span className="font-light dark:text-gray-400">2 question(s)</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <ClockIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                        <span className="font-light dark:text-gray-400">{reviews[0].end - reviews[0].start + 46} minutes</span>
                      </div>
                    </div>
                    <div className="space-y-1 py-2.5">
                      <div className="flex items-center text-sm text-gray-500">
                        <ClipboardCopyIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                        <span className="font-light dark:text-gray-400">Copy Actions - 1</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <DuplicateIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                        <span className="font-light dark:text-gray-400">Paste Actions - 2</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <ScissorsIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                        <span className="font-light dark:text-gray-400">Cut Actions - 2</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <CubeIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                        <span className="font-light dark:text-gray-400">Idle Inside - 0 mins</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <CubeTransparentIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                        <span className="font-light dark:text-gray-400">Idle Outside - 0 mins</span>
                      </div>
                    </div>
                    <div className="space-y-1 py-2.5">
                      <div className="flex items-center rounded bg-gray-50 p-2 text-sm font-medium text-gray-800 dark:bg-gray-700">
                        <span className="ml-1 dark:text-white">User Info</span>
                        <motion.div
                          onClick={() => toggleCard()}
                          className="ml-2 flex-shrink-0 cursor-pointer"
                          animate={itemCardOpen ? "open" : "closed"}
                          variants={variants}
                          whileHover={{ scale: 1.1 }}
                        >
                          <ChevronUpIcon className="pointer-events-none h-5 w-5 text-gray-400" aria-hidden="true" />
                        </motion.div>
                      </div>
                      <div>
                        {itemCardOpen && (
                          <div className="rounded bg-gray-50 p-2 dark:bg-gray-700">
                            <div className="flex items-center text-sm text-gray-500">
                              <UserIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                              <span className="font-light dark:text-gray-300">
                                {reviews[0].user.first_name} {reviews[0].user.last_name}
                              </span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <AtSymbolIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                              <span className="font-light dark:text-gray-300">{reviews[0].user.email}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex justify-center md:mt-20 md:justify-start">
                  <span className="relative z-0 inline-flex rounded-md shadow-sm">
                    <button
                      type="button"
                      className={`relative inline-flex items-center rounded-l-md border px-4 py-2 text-sm font-medium text-gray-700 focus:z-10 focus:outline-none dark:text-white ${
                        reviews[2].status === "passed"
                          ? "border-green-300 bg-green-300 text-white"
                          : "border-gray-300 bg-white hover:bg-gray-50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-none dark:bg-gray-700 dark:hover:bg-gray-600"
                      }`}
                    >
                      Pass
                    </button>
                    <button
                      type="button"
                      className={`relative -ml-px inline-flex items-center border px-4 py-2 text-sm font-medium text-gray-700 focus:z-10 focus:outline-none dark:text-white ${
                        reviews[2].status === "unrevised"
                          ? "border-indigo-700 bg-indigo-700 text-white"
                          : "border-gray-300 bg-white hover:bg-gray-50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-none dark:bg-gray-700 dark:hover:bg-gray-600"
                      }`}
                    >
                      Unrevised
                    </button>
                    <button
                      type="button"
                      className={`relative -ml-px inline-flex items-center rounded-r-md border px-4 py-2 text-sm font-medium text-gray-700 focus:z-10 focus:outline-none dark:text-white ${
                        reviews[2].status === "failed"
                          ? "cursor-default border-gray-300 bg-gray-300 text-white"
                          : "border-gray-300 bg-white hover:bg-gray-50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 dark:border-none dark:bg-gray-700 dark:hover:bg-gray-600"
                      }`}
                    >
                      Fail
                    </button>
                  </span>
                </div>
              </div>
              <div className="mt-5 space-y-4 md:col-span-2 md:mt-0">
                {reviews[0].quiz.questions.map((question, index) => {
                  return (
                    <div key={question.id}>
                      <span className="text-sm text-gray-700 dark:text-gray-100">
                        <span className="text-indigo-500">{index + 1}.</span> {question.title}
                      </span>

                      <div className="rounded bg-gray-50 p-2 text-sm dark:bg-gray-700 dark:text-white">{question.answer}</div>
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
