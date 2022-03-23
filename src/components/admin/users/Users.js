import AnimatedPage from "../../AnimatedPage"

import useTab from "../../../hooks/useTab"

import PageNav from "../shared/PageNav"
import UserForm from "./UserForm"
import User from "./User"

import { users } from "../dummyData"

export default function Users() {
  const [itemTabOpen, toggleTab] = useTab()

  const tabs = [{ title: "Admin" }, { title: "Candidates" }, { title: "New User" }]

  return (
    <AnimatedPage>
      <PageNav tabs={tabs} tabOpen={itemTabOpen} toggleTab={toggleTab} />

      <section className="relative bg-white shadow overflow-hidden rounded z-10">
        <ul className="dark:bg-gray-700 divide-y divide-gray-100 dark:divide-gray-600">
          {users.map(user =>
            (() => {
              if (itemTabOpen === 0 && user.role === "admin") {
                return <User user={user} key={user.id} />
              } else if (itemTabOpen === 1 && user.role === "candidate") {
                return <User user={user} key={user.id} />
              }
            })(),
          )}
        </ul>
      </section>

      {itemTabOpen === 2 && (
        <section className={`relative pb-4 bg-gray-50 dark:bg-gray-700 rounded overflow-hidden shadow z-10`}>
          <div className="absolute top-0 -right-96 w-full h-full bg-green-200 dark:bg-gray-600 -rotate-45 transition-colors duration-1000"></div>

          <UserForm user={{}} />
        </section>
      )}
    </AnimatedPage>
  )
}
