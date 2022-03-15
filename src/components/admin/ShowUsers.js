import UserForm from "./UserForm"

export default function CandidateUsers({ type, className }) {
  return(
    <div className={`${className}`}>
      <UserForm type={type} />
    </div>
  )
}