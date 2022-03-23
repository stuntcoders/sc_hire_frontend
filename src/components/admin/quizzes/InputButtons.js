import { motion } from "framer-motion"

import { PlusSmIcon, MinusSmIcon } from "@heroicons/react/outline"

export default function InputButtons({ addQuestion, removeQuestion, object, list }) {
  return (
    <div className="col-span-6 flex justify-center divide-x dark:divide-gray-600 sm:col-span-2">
      <motion.span onClick={() => addQuestion(object)} className="cursor-pointer rounded-l bg-indigo-600 p-1 hover:bg-indigo-700" whileHover={{ scale: 1.05 }}>
        <PlusSmIcon className="pointer-events-none h-5 w-5 text-white" />
      </motion.span>
      <motion.span
        onClick={() => removeQuestion(-1)}
        className={`rounded-r p-1 ${list.length ? "cursor-pointer bg-indigo-600 hover:bg-indigo-700" : "cursor-not-allowed bg-gray-200 dark:bg-gray-700"}`}
        whileHover={{ scale: list.length ? 1.05 : 1 }}
      >
        <MinusSmIcon className="pointer-events-none h-5 w-5 text-white" />
      </motion.span>
    </div>
  )
}
