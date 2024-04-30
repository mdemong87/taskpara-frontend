'use client'
import Loading from "@/componnent/Loading";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./login.module.css";


export default function Login() {


    const router = useRouter();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [isloading, setisloading] = useState(false);




    async function handleClick() {

        if (email === "" && password !== "") {
            toast.warn("Enter Email");
        } else if (password === "" && email !== "") {
            toast.warn("Enter Password");
        } else if (email === "" && password === "") {
            toast.warn("Enter Email and Password");
        } else {
            setisloading(true);
            const response = await fetch(`/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    pass: password
                })
            });
            const res = await response.json();
            setisloading(false);
            if (res.success) {
                setemail('');
                setpassword('');
                toast.success(res.message);
                setTimeout(() => {
                    router.push('/app');
                }, 700)
            } else {
                toast.error(res.message);
            }
        }
    }


    return (
        <div className={styles.loginWrp}>
            {isloading && <Loading />}
            <div className={styles.contanWrp}>
                <h2 className={styles.header}>Login</h2>
                <input onChange={(e) => setemail(e.target.value)} type="email" placeholder="Email" />
                <input onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Password" />
                <button onClick={() => handleClick()}> Login</button>
                <p>Haven&apos;t an Account ? <Link href="/register">Sign Up</Link></p>
                <p className={styles.forget}><Link href="/">Forget Password</Link></p>
            </div>
            <ToastContainer />
        </div >
    )
}
