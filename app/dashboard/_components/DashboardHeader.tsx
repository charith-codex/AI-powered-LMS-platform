import { UserButton } from "@clerk/nextjs"

export const DashboardHeader = () => {
  return (
    <div className="flex justify-end shadow-md p-5">
      <UserButton />
    </div>
  )
}
