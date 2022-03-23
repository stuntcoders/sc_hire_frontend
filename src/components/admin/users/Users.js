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

      <section className="relative z-10 overflow-hidden rounded bg-white shadow dark:bg-gray-700">
        <ul className="divide-y divide-gray-100 dark:divide-gray-600 dark:bg-gray-700">
          {users.map(user =>
            (() => {
              if (itemTabOpen === 0 && user.role === "admin") {
                return <User user={user} key={user.id} />
              } else if (itemTabOpen === 1 && user.role === "candidate") {
                return <User user={user} key={user.id} />
              }
            })()
          )}
        </ul>
      </section>

      {itemTabOpen === 2 && (
        <section className={`relative z-10 overflow-hidden rounded bg-gray-50 pb-4 shadow dark:bg-gray-700`}>
          <div className="absolute top-0 -right-96 h-full w-full -rotate-45 bg-green-200 transition-colors duration-1000 dark:bg-gray-600"></div>

          <UserForm user={{}} />
        </section>
      )}
    </AnimatedPage>
  )
}
