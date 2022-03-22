import useQuestionList from "../../../hooks/useQuestionList"

import InputButtons from "./InputButtons"

export default function Radio({ index }) {
  const [questionList, addQuestion, removeQuestion] = useQuestionList()

  return (
    <fieldset className="space-y-4 p-4 bg-gray-50 dark:bg-gray-800 rounded">
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id={`radio-${index}-0`}
            name={`radio-${index}-0`}
            type="radio"
            className="mt-1.5 dark:bg-gray-700 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 dark:border-none"
          />
        </div>
        <div className="w-full ml-4 border-b border-gray-300 dark:border-gray-600 focus-within:border-indigo-600">
          <input
            id={`radio-input-${index}-0`}
            type="text"
            className="inline-block w-full h-6 border-0 border-b border-transparent dark:text-white bg-gray-50 dark:bg-gray-800 placeholder:text-gray-300 dark:placeholder:text-gray-600 focus:border-indigo-600 focus:ring-0 sm:text-sm"
            placeholder="Radio option 1"
          />
        </div>
      </div>

      {questionList.map((question, question_index) => {
        return (
          <div key={question_index} className="relative flex items-start bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center h-5">
              <input
                id={question.radio}
                name={question.radio}
                type="radio"
                className="mt-1 h-4 w-4 dark:bg-gray-700 text-indigo-600 border-gray-300 dark:border-none focus:ring-indigo-500"
              />
            </div>
            <div className="w-full ml-4 border-b border-gray-300 dark:border-gray-600 focus-within:border-indigo-600">
              <input
                id={question.input}
                type="text"
                className="inline-block w-full h-6 border-0 border-b border-transparent dark:text-white bg-gray-50 dark:bg-gray-800 placeholder:text-gray-300 dark:placeholder:text-gray-600 focus:border-indigo-600 focus:ring-0 sm:text-sm"
                placeholder={`Radio option ${question_index + 2}`}
              />
            </div>
          </div>
        );
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
