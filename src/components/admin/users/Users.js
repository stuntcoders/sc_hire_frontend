import AnimatedPage from "../../AnimatedPage"

import useTab from "../../../hooks/useTab";

import PageNav from "../shared/PageNav"
import UserForm from "./UserForm";
import User from "./User";

import { ReactComponent as PolygonRight } from "../../../assets/shapes/polygon_right.svg"

export default function Users() {
  const [itemTabOpen, toggleTab] = useTab()

  const tabs = [
    { title: "Admin" },
    { title: "Candidates" },
    { title: "New User" }
  ]

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
      <PageNav tabs={tabs} tabOpen={itemTabOpen} toggleTab={toggleTab} />

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