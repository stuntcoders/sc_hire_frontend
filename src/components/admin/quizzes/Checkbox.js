import useQuestionList from "../../../hooks/useQuestionList"

import { PlusSmIcon, MinusSmIcon } from "@heroicons/react/outline"

export default function Checkbox({ index }) {
  const [questionList, addQuestion, removeQuestion] = useQuestionList()

  return (
    <fieldset className="space-y-4 p-4 bg-gray-50 rounded">
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id={`checkbox-${index}-0`}
            name={`checkbox-${index}-0`}
            type="checkbox"
            className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 rounded"
          />
        </div>
        <div className="w-full ml-4 border-b border-gray-300 focus-within:border-indigo-600">
          <input
            id={`checkbox-input-${index}-0`}
            type="text"
            className="inline-block w-full h-6 border-0 border-b border-transparent bg-gray-50 placeholder:text-gray-300 focus:border-indigo-600 focus:ring-0 sm:text-sm"
            placeholder="Checkbox option 1"
          />
        </div>
      </div>

      {questionList.map((question, question_index) => {
        return (
          <div key={question_index} className="relative flex items-start">
            <div className="flex items-center h-5">
              <input
                id={question.checkbox}
                name={question.checkbox}
                type="checkbox"
                className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 rounded"
              />
            </div>
            <div className="w-full ml-4 border-b border-gray-300 focus-within:border-indigo-600">
              <input
                id={question.input}
                type="text"
                className="inline-block w-full h-6 border-0 border-b border-transparent bg-gray-50 placeholder:text-gray-300 focus:border-indigo-600 focus:ring-0 sm:text-sm"
                placeholder={`Checkbox option ${question_index + 2}`}
              />
            </div>
          </div>
        );
      })}

      <div className="flex col-span-6 sm:col-span-2 justify-center divide-x">
        <span
          onClick={() => addQuestion({ checkbox: `checkbox-${index}-${questionList.length + 1}`, input: `checkbox-input-${index}-${questionList.length + 1}` })}
          className="p-1 bg-indigo-600 hover:bg-indigo-700 rounded-l cursor-pointer"
        >
          <PlusSmIcon className="h-5 w-5 text-white pointer-events-none" />
        </span>
        <span
          onClick={() => removeQuestion(-1)}
          className={`p-1 rounded-r ${ questionList.length ? "bg-indigo-600 hover:bg-indigo-700 cursor-pointer" : "bg-gray-200 cursor-not-allowed" }`}
        >
          <MinusSmIcon className="h-5 w-5 text-white pointer-events-none" />
        </span>
      </div>
    </fieldset>
  )
}
