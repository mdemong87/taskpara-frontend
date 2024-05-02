'use client'

import { useRouter } from "next/navigation";
import { CiLogout } from "react-icons/ci";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function LogoutBtn() {

    const router = useRouter();

    function handleLogout() {

        toast.success("Logout Successfull");
        setTimeout(() => {
            router.push("/login");
        }, 1000);

    }



    return (
        <div>
            <button onClick={() => handleLogout()} className="w-full text-gray-100 bg-gray-800 rounded-md px-3 py-2 flex items-center gap-2 transition ease-in-out active:scale-105">
                <CiLogout className="text-gray-100 text-2xl" />
                <span>Logout</span>
            </button>
            <ToastContainer />
        </div>
    )
}

export default LogoutBtn;