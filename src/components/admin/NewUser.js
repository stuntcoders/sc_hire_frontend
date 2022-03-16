import useCard from "../../hooks/useCard";

import { ChevronRightIcon } from "@heroicons/react/outline"
import UserDetails from "./UserDetails";

export default function NewUser({ type }) {
  const [itemCardOpen, toggleCard] = useCard()

  return(
    <div className={`relative bg-gray-50 dark:bg-white rounded overflow-hidden shadow z-10 ${itemCardOpen ? "pb-4" : "px-6"}`}>
      <h2 className={`relative text-base font-light z-10 ${itemCardOpen ? "hidden" : "py-2"}`}>
        Create {type}
      </h2>
      <div className="absolute -top-1 -right-64 md:-right-36 w-[36rem] h-96 bg-green-200 rotate-[112deg] transform"></div>
      <span onClick={() => toggleCard()} className="absolute top-3 right-6 text-gray-400 hover:text-white cursor-pointer z-10">
        <ChevronRightIcon className="h-5 w-5 pointer-events-none"/>
      </span>

      { itemCardOpen ? <UserDetails user={{}} /> : <></> }
    </div>
  )
}