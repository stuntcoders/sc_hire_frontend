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
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-300 italic" id="email-description">
            *Please check correct answer(s)
          </p>
        )
      case "radio":
        return (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-300 italic" id="email-description">
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
        className={`col-span-3 w-full bg-gray-50 dark:bg-gray-800 p-4 border-t-2 border-gray-200 dark:border-gray-600 ${
          type === "text" || type === "code" ? "rounded" : "rounded-t"
        }`}
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3 }}
      >
        <label htmlFor={`title-${index}`} className="flex justify-between items-center text-sm font-medium capitalize text-gray-700 dark:text-white">
          {index + 1}. {type} Question Title
          <motion.span onClick={() => removeQuestion(index)} className="group p-1 rounded-r cursor-pointer" whileHover={{ scale: 1.1 }}>
            <XIcon className="h-5 w-5 text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-300 group-hover:text-gray-900 pointer-events-none" />
          </motion.span>
        </label>
        <input
          type="text"
          name={`title-${index}`}
          id={`title-${index}`}
          autoComplete="off"
          className="mt-1 dark:bg-gray-700 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm dark:text-white border-gray-300 dark:border-none rounded-md"
        />
        {instructions(type)}
      </motion.div>
      <motion.div className="col-span-3 mb-4 shadow-sm" variants={animations} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.3 }}>
        {component(type, index, animations)}
      </motion.div>
    </>
  )
}
