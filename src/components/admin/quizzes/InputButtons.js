import { motion } from "framer-motion"

import { PlusSmIcon, MinusSmIcon } from "@heroicons/react/outline"

export default function InputButtons({ addQuestion, removeQuestion, object, list }) {
  return (
    <div className="flex col-span-6 sm:col-span-2 justify-center divide-x dark:divide-gray-600">
      <motion.span onClick={() => addQuestion(object)} className="p-1 bg-indigo-600 hover:bg-indigo-700 rounded-l cursor-pointer" whileHover={{ scale: 1.05 }}>
        <PlusSmIcon className="h-5 w-5 text-white pointer-events-none" />
      </motion.span>
      <motion.span
        onClick={() => removeQuestion(-1)}
        className={`p-1 rounded-r ${list.length ? "bg-indigo-600 hover:bg-indigo-700 cursor-pointer" : "bg-gray-200 dark:bg-gray-700 cursor-not-allowed"}`}
        whileHover={{ scale: list.length ? 1.05 : 1 }}
      >
        <MinusSmIcon className="h-5 w-5 text-white pointer-events-none" />
      </motion.span>
    </div>
  )
}
