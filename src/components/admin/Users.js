import { useState } from "react";

import ShowUsers from "./ShowUsers"
import User from "./User";

export default function Users() {
  const [tab, setTabState] = useState(0);

  const showTab = index => {
    setTabState(index);
  };

  let users = [
    {
      "id": 1,
      "first_name": "John",
      "last_name": "Smith",
      "email": "john_smith@fake.com",
      "password": "c5ba039c317364219207a0c3da2189",
      "role": "admin"
    },
    {
      "id": 2,
      "first_name": "Jane",
      "last_name": "Smith",
      "email": "jane_smith@fake.com",
      "password": "7c5ba039c31364219207a0c3da2189",
      "role": "candidate"
    },
    {
      "id": 3,
      "first_name": "Sarah",
      "last_name": "Key",
      "email": "sarah_key@fake.com",
      "password": "da2187c5ba039c31364219207a0c39",
      "role": "candidate"
    },
  ]

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

      <section>
        <ShowUsers type="Admin" className={tab === 0 ? "block" : "hidden"} />
        <ShowUsers type="Candidate" className={tab === 1 ? "block" : "hidden"} />
      </section>

      <section className="bg-white shadow overflow-hidden rounded my-6">
        <ul className="divide-y divide-gray-200">
          {users.map((user) => (
            user.role === "admin" ?
              <User user={user} key={user.id} className={tab === 0 ? "block" : "hidden"} /> :
              <User user={user} key={user.id} className={tab === 1 ? "block" : "hidden"} />
          ))}
        </ul>
      </section>
    </>
  );
}