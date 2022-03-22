import AnimatedPage from "../../AnimatedPage"

import useTab from "../../../hooks/useTab";

import UserForm from "./UserForm";
import User from "./User";

import { ReactComponent as PolygonRight } from "../../../assets/shapes/polygon_right.svg"

export default function Users() {
  const [itemTabOpen, toggleTab] = useTab()

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
    <AnimatedPage>
      <ul className="flex mb-2 space-x-2">
        <li className={ `flex items-end ${itemTabOpen === 0 ? "text-3xl font-light text-gray-800 dark:text-gray-50" : "text-2xl font-extralight text-gray-400 dark:text-gray-500"}` }
            onClick={() => toggleTab(0)}
        >
          <span className="cursor-pointer">
            Admin
          </span>
          <span className={`inline-flex self-center w-16 h-px ml-2 mt-2 ${itemTabOpen === 0 ? "bg-indigo-600" : "bg-gray-300 dark:bg-gray-600"}`}></span>
        </li>
        <li className={ `flex items-end ${itemTabOpen === 1 ? "text-3xl font-light text-gray-800 dark:text-gray-50" : "text-2xl font-extralight text-gray-400 dark:text-gray-500"}` }
            onClick={() => toggleTab(1)}
        >
          <span className="cursor-pointer">
            Candidates
          </span>
          <span className={`inline-flex self-center w-16 h-px ml-2 mt-2 ${itemTabOpen === 1 ? "bg-indigo-600" : "bg-gray-300 dark:bg-gray-600"}`}></span>
        </li>
        <li className={ `flex items-end ${itemTabOpen === 2 ? "text-3xl font-light text-gray-800 dark:text-gray-50" : "text-2xl font-extralight text-gray-400 dark:text-gray-500"}` }
            onClick={() => toggleTab(2)}
        >
          <span className="cursor-pointer">
            New User
          </span>
        </li>
      </ul>

      <section className="relative bg-white shadow overflow-hidden rounded z-10">
        <ul className="dark:bg-gray-700 divide-y divide-gray-100 dark:divide-gray-600">
          {users.map((user) => (
            (() => {
              if (itemTabOpen === 0 && user.role === "admin") {
                return <User user={user} key={user.id} />
              } else if (itemTabOpen === 1 && user.role === "candidate") {
                return <User user={user} key={user.id} />
              }
            })()
          ))}
        </ul>
      </section>

      {itemTabOpen === 2 &&
        <section className={`relative pb-4 bg-gray-50 dark:bg-gray-700 rounded overflow-hidden shadow z-10`}>
          <PolygonRight fill="#bbf7d0" className="absolute top-0 right-0" />

          <UserForm user={{}} />
        </section>
      }
    </AnimatedPage>
  );
}