'use client'

import Loading from "@/componnent/Loading";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./resister.module.css";

export default function Register() {


    const router = useRouter();
    const [fristName, setfristName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [country, setcountry] = useState('');
    const [pass, setpass] = useState('');
    const [conpass, setconpass] = useState('');
    const [isLoading, setisLoading] = useState(false);




    async function handleClick() {


        if (fristName === "" || lastName === "" || email === "" || conpass === "" || country === "" || pass === "") {
            toast.warn("Enter All filed");
        } else {


            if (pass === conpass) {
                setisLoading(true);
                const signUpobject = {
                    fName: fristName,
                    lName: lastName,
                    email: email,
                    country: country,
                    pass: pass,
                }
                const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(signUpobject)
                });
                const res = await response.json();
                setisLoading(false);
                if (res.success) {
                    setconpass('');
                    setcountry('');
                    setemail('');
                    setfristName('');
                    setlastName('');
                    setpass('');
                    toast.success(res.message);
                    setTimeout(() => {
                        router.push("/login");
                    }, 1000);
                } else {
                    toast.error(res.message);
                }

            } else {
                toast.warn("password and confirm password does not match");
            }

        }

    }




    return (
        <div className={styles.loginWrp}>
            {isLoading && <Loading />}
            <div className={styles.contanWrp}>
                <h2 className={styles.header}>Sign Up</h2>
                <input onChange={(e) => setfristName(e.target.value)} type="text" placeholder="Frist Name" />
                <input onChange={(e) => setlastName(e.target.value)} type="text" placeholder="Last Name" />
                <input onChange={(e) => setemail(e.target.value)} type="email" placeholder="Email" />
                <input onChange={(e) => setcountry(e.target.value)} type="text" placeholder="Country" />
                <input onChange={(e) => setpass(e.target.value)} type="password" placeholder="Password" />
                <input onChange={(e) => setconpass(e.target.value)} type="password" placeholder="confrime Password" />
                <button onClick={() => handleClick()}>Sign Up</button>
                <p>Have an Account ? <Link href="/login">Login</Link></p>
            </div>
            <ToastContainer />
        </div>
    )
}

