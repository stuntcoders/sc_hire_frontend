import { motion } from "framer-motion"

import useQuestionList from "../../../hooks/useQuestionList"

import InputButtons from "./InputButtons"

export default function Radio({ index, animations }) {
  const [questionList, addQuestion, removeQuestion] = useQuestionList()

  return (
    <fieldset className="space-y-4 rounded-b bg-gray-50 p-4 dark:bg-gray-800">
      <div className="flex items-start">
        <div className="flex h-5 items-center">
          <input
            id={`radio-${index}-0`}
            name={`radio-${index}`}
            type="radio"
            className="mt-1.5 h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-transparent dark:bg-gray-700"
          />
        </div>
        <div className="ml-4 w-full border-b border-gray-300 focus-within:border-indigo-600 dark:border-gray-600">
          <input
            id={`radio-input-${index}-0`}
            type="text"
            className="inline-block h-6 w-full border-0 border-b border-transparent bg-gray-50 placeholder:text-gray-300 focus:border-indigo-600 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-600 sm:text-sm"
            placeholder="Radio option 1"
          />
        </div>
      </div>

      {questionList.map((question, question_index) => {
        return (
          <motion.div
            key={question_index}
            className="relative flex items-start bg-gray-50 dark:bg-gray-800"
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2 }}
          >
            <div className="flex h-5 items-center">
              <input
                id={question.radio}
                name={`radio-${index}`}
                type="radio"
                className="mt-1 h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-transparent dark:bg-gray-700"
              />
            </div>
            <div className="ml-4 w-full border-b border-gray-300 focus-within:border-indigo-600 dark:border-gray-600">
              <input
                id={question.input}
                type="text"
                className="inline-block h-6 w-full border-0 border-b border-transparent bg-gray-50 placeholder:text-gray-300 focus:border-indigo-600 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-600 sm:text-sm"
                placeholder={`Radio option ${question_index + 2}`}
              />
            </div>
          </motion.div>
        )
      })}

      <InputButtons
        addQuestion={addQuestion}
        removeQuestion={removeQuestion}
        object={{ radio: `radio-${index}-${questionList.length + 1}`, input: `radio-input-${index}-${questionList.length + 1}` }}
        list={questionList}
      />
    </fieldset>
  )
}
