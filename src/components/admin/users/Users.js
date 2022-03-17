import useCard from "../../../hooks/useCard";
import useTab from "../../../hooks/useTab";

import UserForm from "./UserForm";
import User from "./User";

import { ChevronRightIcon } from "@heroicons/react/outline"
import { ReactComponent as Polygon } from "../../../assets/shapes/polygon.svg"

export default function Users() {
  const [itemCardOpen, toggleCard] = useCard()
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
    <>
      <ul className="flex mb-2 space-x-2">
        <li className={ `flex items-end ${itemTabOpen === 0 ? "text-3xl font-light text-gray-800 dark:text-gray-50" : "text-2xl font-extralight text-gray-400 dark:text-gray-500"}` }
            onClick={() => toggleTab(0)}
        >
          <span className="cursor-pointer">
            Admin
          </span>
          <span className="inline-flex self-center w-16 h-px ml-2 mt-2 bg-indigo-500"></span>
        </li>
        <li className={ `flex items-end ${itemTabOpen === 1 ? "text-3xl font-light text-gray-800 dark:text-gray-50" : "text-2xl font-extralight text-gray-400 dark:text-gray-500"}` }
            onClick={() => toggleTab(1)}
        >
          <span className="cursor-pointer">
            Candidates
          </span>
        </li>
      </ul>

      <section className={`relative bg-gray-50 dark:bg-white rounded overflow-hidden shadow z-10 ${itemCardOpen ? "pb-4" : "px-6"}`}>
        <h2 className={`relative text-sm font-medium z-10 ${itemCardOpen ? "hidden" : "py-2"}`}>
          Create user
        </h2>
        <Polygon fill="#bbf7d0" className="absolute right-0" />
        <span onClick={() => toggleCard()} className={`absolute top-2.5 right-6 text-gray-400 hover:text-white cursor-pointer z-10 ${itemCardOpen ? "hidden" : ""}`}>
          <ChevronRightIcon className="h-5 w-5 pointer-events-none"/>
        </span>

        { itemCardOpen ? <UserForm user={{}} toggleCard={toggleCard} /> : <></> }
      </section>

      <section className="relative bg-white shadow overflow-hidden rounded my-6 z-10">
        <ul className="divide-y divide-gray-100 dark:divide-gray-200">
          {users.map((user) => (
            user.role === "admin" ?
              <User user={user} key={user.id} className={itemTabOpen === 0 ? "block" : "hidden"} /> :
              <User user={user} key={user.id} className={itemTabOpen === 1 ? "block" : "hidden"} />
          ))}
        </ul>
      </section>
    </>
  );
}