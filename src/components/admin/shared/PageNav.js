export default function PageNav({ tabs, tabOpen, toggleTab }) {
  return (
    <ul className="flex mb-2 space-x-2">
      {tabs.map((tab, index) => {
        return (
          <li
            key={index}
            className={`flex items-end ${
              tabOpen === index
                ? "text-3xl font-light text-gray-800 dark:text-gray-50 cursor-pointer"
                : "group text-2xl font-extralight text-gray-400 dark:text-gray-500"
            }`}
            onClick={() => toggleTab(index)}>
            <span className="group-hover:text-indigo-500 transition-colors duration-500">{tab.title}</span>
            {tabs.length !== index + 1 && (
              <span className={`inline-flex self-center w-16 h-px ml-2 mt-2 ${tabOpen === index ? "bg-indigo-500" : "bg-gray-300 dark:bg-gray-600"}`}></span>
            )}
          </li>
        )
      })}
    </ul>
  )
}
