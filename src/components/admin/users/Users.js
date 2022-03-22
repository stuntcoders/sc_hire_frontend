import AnimatedPage from "../../AnimatedPage"

import useTab from "../../../hooks/useTab"

import PageNav from "../shared/PageNav"
import UserForm from "./UserForm"
import User from "./User"

import { users } from "../dummyData"

import { ReactComponent as PolygonRight } from "../../../assets/shapes/polygon_right.svg"

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
          <PolygonRight fill="#bbf7d0" className="absolute top-0 right-0" />

          <UserForm user={{}} />
        </section>
      )}
    </AnimatedPage>
  )
}
