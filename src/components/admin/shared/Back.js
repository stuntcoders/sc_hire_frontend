import { motion } from "framer-motion"

import { Link } from "react-router-dom"

import { ChevronLeftIcon } from "@heroicons/react/outline"

const animations = {
  rest: { x: -1 },
  hover: {
    x: [-4, -6, -2, -4, -6, -2, 0],
    opacity: [0.4, 0.2, 0.6, 0.4, 0.2, 0.8, 1],
    transition: {
      duration: 1.4,
      ease: "linear"
    }
  }
}

export default function Back({ path, search = "" }) {
  return (
    <ul className="mb-2 flex space-x-2">
      <li className="flex items-end text-2xl font-extralight text-gray-400 dark:text-gray-500">
        <Link to={{ pathname: `${path}`, search: `${search}` }}>
          <motion.span className="group flex cursor-pointer items-center hover:text-indigo-500" initial="rest" whileHover="hover" animate="rest">
            <motion.span className="flex items-center" variants={animations}>
              <ChevronLeftIcon className="mt-px inline-block h-5 w-5 text-gray-500 group-hover:text-indigo-500" />
            </motion.span>
            <motion.span>Back</motion.span>
          </motion.span>
        </Link>
      </li>
    </ul>
  )
}
