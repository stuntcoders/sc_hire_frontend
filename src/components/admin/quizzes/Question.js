import { motion } from "framer-motion"

import Checkbox from "./Checkbox"
import Radio from "./Radio"

import { XIcon } from "@heroicons/react/outline"

const animations = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export default function Question({ type, index, removeQuestion }) {
  const instructions = inputType => {
    switch (inputType) {
      case "checkbox":
        return (
          <p className="mt-2 text-sm italic text-gray-500 dark:text-gray-300" id="email-description">
            *Please check correct answer(s)
          </p>
        )
      case "radio":
        return (
          <p className="mt-2 text-sm italic text-gray-500 dark:text-gray-300" id="email-description">
            *Please check correct answer
          </p>
        )
      default:
        return null
    }
  }

  const component = (inputType, inputIndex, inputAnimations) => {
    switch (inputType) {
      case "checkbox":
        return <Checkbox index={inputIndex} animations={inputAnimations} />
      case "radio":
        return <Radio index={inputIndex} animations={inputAnimations} />
      default:
        return null
    }
  }

  return (
    <>
      <motion.div
        className={`col-span-3 w-full border-t-2 border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-800 ${
          type === "text" || type === "code" ? "rounded" : "rounded-t"
        }`}
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3 }}
      >
        <label htmlFor={`title-${index}`} className="flex items-center justify-between text-sm font-medium capitalize text-gray-700 dark:text-white">
          {index + 1}. {type} Question Title
          <motion.span onClick={() => removeQuestion(index)} className="group cursor-pointer rounded-r p-1" whileHover={{ scale: 1.1 }}>
            <XIcon className="pointer-events-none h-5 w-5 text-gray-600 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-300" />
          </motion.span>
        </label>
        <input
          type="text"
          name={`title-${index}`}
          id={`title-${index}`}
          autoComplete="off"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-none dark:bg-gray-700 dark:text-white sm:text-sm"
        />
        {instructions(type)}
      </motion.div>
      <motion.div className="col-span-3 mb-4 shadow-sm" variants={animations} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
        {component(type, index, animations)}
      </motion.div>
    </>
  )
}
