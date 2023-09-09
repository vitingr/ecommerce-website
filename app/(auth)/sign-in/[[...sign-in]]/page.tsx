import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="w-full flex items-center justify-center p-[10%] h-[100vh] bg-no-repeat bg-cover bg-center">
      <SignIn />
    </div>
  )
}