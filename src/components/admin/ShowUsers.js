import NewUser from "./NewUser"

export default function ShowUsers({ type, className }) {
  return(
    <div className={`${className}`}>
      <NewUser type={type} />
    </div>
  )
}