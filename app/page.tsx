import { currentUser } from "@clerk/nextjs/server"
import Guest from "../components/Guest"

export default async function HomePage() {
  const user = await currentUser()

if (!user) {
  return <Guest/>
}

  return (
    <div className='text-yellow-500 bg-white'>
      <h1>Home Page</h1>
    </div>
  )
}
