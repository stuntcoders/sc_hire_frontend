import AnimatedPage from "../../AnimatedPage"
import { motion } from "framer-motion"

import useCard from "../../../hooks/useCard"

import UserForm from "./UserForm"

import { KeyIcon, ChevronUpIcon } from "@heroicons/react/outline"

const variants = {
  open: { rotate: 180 },
  closed: { rotate: 0 }
}

export default function User({ user, className }) {
  const [itemCardOpen, toggleCard] = useCard()

  return (
    <AnimatedPage>
      <li key={user.id} className={className}>
        <div className={`block bg-gray-50 dark:bg-gray-700 ${itemCardOpen ? "pb-4" : ""}`}>
          <div className="flex items-center px-4 py-4 sm:px-6">
            <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
              <div className="truncate">
                <div className="flex text-sm">
                  <p className="truncate font-medium dark:text-white">{user.first_name}</p>
                  <p className="ml-1 flex-shrink-0 font-medium dark:text-white">{user.last_name}</p>
                  <span className="mx-1 mt-0.5 inline-flex h-px w-10 self-center bg-gray-300 dark:bg-gray-500"></span>
                  <p className="ml-0.5 text-indigo-500">{user.email}</p>
                </div>
                <div className="mt-2 flex">
                  <div className="flex items-center text-sm text-gray-500">
                    <KeyIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                    <span className="font-light dark:text-gray-400">{user.password}</span>
                  </div>
                </div>
              </div>
              {itemCardOpen || (
                <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                  <div className="flex -space-x-1 overflow-hidden">
                    <span className="text-sm text-indigo-600 dark:text-indigo-500">{user.role}</span>
                  </div>
                </div>
              )}
            </div>
            <motion.div
              onClick={() => toggleCard()}
              className="ml-5 flex-shrink-0 cursor-pointer"
              animate={itemCardOpen ? "open" : "closed"}
              variants={variants}
              whileHover={{ scale: 1.1 }}
            >
              <ChevronUpIcon className="pointer-events-none h-5 w-5 text-gray-400" aria-hidden="true" />
            </motion.div>
          </div>

          {itemCardOpen && <UserForm user={user} />}
        </div>
      </li>
    </AnimatedPage>
  )
}
