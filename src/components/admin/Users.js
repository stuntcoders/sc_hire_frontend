import { useState } from "react";

import ShowUsers from "./ShowUsers"

export default function Users() {
  const [tab, setTabState] = useState(0);

  const showTab = index => {
    setTabState(index);
  };

  return (
    <>
      <ul className="flex mb-2 space-x-2">
        <li className={ `flex items-end ${tab === 0 ? "text-3xl font-light text-gray-800 dark:text-gray-50" : "text-2xl font-extralight text-gray-400 dark:text-gray-500"}` }
            onClick={() => showTab(0)}
        >
          <span className="cursor-pointer">
            Admin
          </span>
          <span className="inline-flex self-center w-16 h-px ml-2 mt-2 bg-indigo-500"></span>
        </li>
        <li className={ `flex items-end ${tab === 1 ? "text-3xl font-light text-gray-800 dark:text-gray-50" : "text-2xl font-extralight text-gray-400 dark:text-gray-500"}` }
            onClick={() => showTab(1)}
        >
          <span className="cursor-pointer">
            Candidates
          </span>
        </li>
      </ul>

      <div>
        <ShowUsers type="Admin" className={tab === 0 ? "block" : "hidden"} />
        <ShowUsers type="Candidate" className={tab === 1 ? "block" : "hidden"} />
      </div>
    </>
  );
}