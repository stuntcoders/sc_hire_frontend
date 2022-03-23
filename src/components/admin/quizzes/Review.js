import AnimatedPage from "../../AnimatedPage"
import { motion } from "framer-motion"

import { Link } from "react-router-dom"

import { ClockIcon, ChevronRightIcon } from "@heroicons/react/outline"

export default function Review({ review }) {
  const statusColor = status => {
    switch (status) {
      case "unrevised":
        return "text-indigo-600 dark:text-indigo-500"
      case "passed":
        return "text-green-400 dark:text-green-300"
      case "failed":
        return "text-gray-400"
      default:
        return null
    }
  }

  return (
    <AnimatedPage>
      <li key={review.id}>
        <section className="block bg-gray-50 dark:bg-gray-700">
          <div className="flex items-center px-4 py-4 sm:px-6">
            <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
              <div className="truncate">
                <div className="flex">
                  <p className="truncate text-sm font-medium text-indigo-600 dark:text-indigo-500">{review.user.id}</p>
                </div>
                <div className="mt-2 flex">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <ClockIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                    <span className="truncate">
                      {new Intl.DateTimeFormat("default", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit",
                        hour: "numeric",
                        minute: "numeric"
                      }).format(review.start)}
                    </span>
                    &nbsp;-&nbsp;
                    <span className="truncate">
                      {new Intl.DateTimeFormat("default", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit",
                        hour: "numeric",
                        minute: "numeric"
                      }).format(review.end)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                <div className="flex -space-x-1 overflow-hidden">
                  <span className={`text-sm ${statusColor(review.status)}`}>{review.status}</span>
                </div>
              </div>
            </div>
            <motion.div className="ml-5 flex-shrink-0 cursor-pointer" whileHover={{ scale: 1.1 }}>
              <Link to={`/admin/review/${review.id}`}>
                <ChevronRightIcon className="pointer-events-none h-5 w-5 text-gray-400 dark:text-gray-300" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </section>
      </li>
    </AnimatedPage>
  )
}
