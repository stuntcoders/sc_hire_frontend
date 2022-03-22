import { PlusSmIcon, MinusSmIcon } from "@heroicons/react/outline"

export default function InputButtons({ addQuestion, removeQuestion, object, list }) {
  return (
    <div className="flex col-span-6 sm:col-span-2 justify-center divide-x dark:divide-gray-600">
      <span
        onClick={() => addQuestion(object)}
        className="p-1 bg-indigo-600 hover:bg-indigo-700 rounded-l cursor-pointer"
      >
        <PlusSmIcon className="h-5 w-5 text-white pointer-events-none" />
      </span>
      <span
        onClick={() => removeQuestion(-1)}
        className={`p-1 rounded-r ${ list.length ? "bg-indigo-600 hover:bg-indigo-700 cursor-pointer" : "bg-gray-200 dark:bg-gray-700 cursor-not-allowed" }`}
      >
        <MinusSmIcon className="h-5 w-5 text-white pointer-events-none" />
      </span>
    </div>
  )
}
