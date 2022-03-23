import { motion } from "framer-motion"

const stats = [
  { name: "Total Candidates", stat: "1,897" },
  { name: "Total Quizzes", stat: "2002" },
  { name: "Unrevised Quizzes", stat: "3" }
]

const animations = {
  initial: { opacity: 0, x: -80 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 }
}

export default function Stats() {
  return (
    <>
      <div className="relative z-10 overflow-hidden p-6 pt-1">
        <dl className="relative z-10 mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map(item => (
            <motion.div
              key={item.name}
              className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow dark:bg-gray-800 sm:p-6"
              variants={animations}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6 }}
            >
              <dt className="truncate text-sm font-medium text-gray-500 dark:text-white">{item.name}</dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-300">{item.stat}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </>
  )
}
