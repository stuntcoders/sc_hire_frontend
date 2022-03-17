import useTab from "../../../hooks/useTab";

export default function Tests() {
  const [itemTabOpen, toggleTab] = useTab()

  return(
    <>
      <ul className="flex mb-2 space-x-2">
        <li className={ `flex items-end ${itemTabOpen === 0 ? "text-3xl font-light text-gray-800 dark:text-gray-50" : "text-2xl font-extralight text-gray-400 dark:text-gray-500"}` }
            onClick={() => toggleTab(0)}
        >
          <span className="cursor-pointer">
            Template
          </span>
          <span className="inline-flex self-center w-16 h-px ml-2 mt-2 bg-indigo-500"></span>
        </li>
        <li className={ `flex items-end ${itemTabOpen === 1 ? "text-3xl font-light text-gray-800 dark:text-gray-50" : "text-2xl font-extralight text-gray-400 dark:text-gray-500"}` }
            onClick={() => toggleTab(1)}
        >
          <span className="cursor-pointer">
            Assigned
          </span>
        </li>
      </ul>
    </>
  )
}