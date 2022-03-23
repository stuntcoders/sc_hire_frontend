export default function PageNav({ tabs, tabOpen, toggleTab }) {
  return (
    <ul className="mb-2 flex space-x-2">
      {tabs.map((tab, index) => {
        return (
          <li
            key={index}
            className={`flex items-end ${
              tabOpen === index
                ? "cursor-pointer text-3xl font-light text-gray-800 dark:text-gray-50"
                : "group text-2xl font-extralight text-gray-400 dark:text-gray-500"
            }`}
            onClick={() => toggleTab(index)}
          >
            <span className="transition-colors duration-500 group-hover:text-indigo-500">{tab.title}</span>
            {tabs.length !== index + 1 && (
              <span className={`ml-2 mt-2 inline-flex h-px w-16 self-center ${tabOpen === index ? "bg-indigo-500" : "bg-gray-300 dark:bg-gray-600"}`}></span>
            )}
          </li>
        )
      })}
    </ul>
  )
}
