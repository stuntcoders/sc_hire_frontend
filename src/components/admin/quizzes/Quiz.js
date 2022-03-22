import AnimatedPage from "../../AnimatedPage"
import { motion } from "framer-motion"

import { Link } from "react-router-dom"

import { CollectionIcon, ChevronRightIcon } from "@heroicons/react/outline"

export default function Quiz({ quiz }) {
  return (
    <AnimatedPage>
      <li key={quiz.id}>
        <div className="block bg-gray-50 dark:bg-gray-700">
          <div className="px-4 py-4 flex items-center sm:px-6">
            <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
              <div className="truncate">
                <div className="flex text-sm">
                  <p className="font-medium truncate dark:text-white">{quiz.title}</p>
                  <span className="inline-flex self-center w-10 mt-0.5 mx-1 h-px bg-gray-300 dark:bg-gray-500"></span>
                  <p className="ml-0.5 text-indigo-500">
                    {quiz.duration} minutes
                  </p>
                </div>
                <div className="mt-2 flex">
                  <div className="flex items-center text-sm text-gray-500">
                    <CollectionIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                    <span className="font-light dark:text-gray-400">
                      {quiz.questions.length} question(s)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              className="ml-5 flex-shrink-0 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <Link to={`${quiz.id}`}>
                <ChevronRightIcon className="h-5 w-5 text-gray-400 dark:text-gray-300 pointer-events-none" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </div>
      </li>
    </AnimatedPage>
  )
}
