
import Link from "next/link";
import { PiCursorClickFill } from "react-icons/pi";


export default function Home() {

  return (
    <main className="pBg h-screen w-screen text-gray-100 flex justify-center items-center px-10">
      <div className="text-center flex flex-col items-center">
        <h2 className="text-4xl pb-8 font-semibold">Welcome to Programming Hero Skill Assessment Task</h2>
        <h3 className="text-2xl font-semibold">Project Name Taskpara</h3>
        <p className="pb-8 text-lg text-gray-300">A Project orTask Management Software</p>

        <Link className="bg-white text-gray-900 flex items-center gap-3 w-fit font-semibold px-3 py-2 rounded-md" href={'/login'}>
          <span>Go to Project Dashboard</span>
          <PiCursorClickFill className="text-gray-800 text-xl" />
        </Link>


        <div className="mt-24">
          <p className="text-2xl font-bold pb-3">
            <span>For Demo Login</span>
          </p>
          <p>
            <b>Eamil: </b>
            <span>demo@gmail.com</span>
          </p>
          <p>
            <b>password: </b>
            <span>123456</span>
          </p>
        </div>
      </div>
    </main>
  );
}
