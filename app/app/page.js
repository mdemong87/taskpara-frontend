import ContentSide from "@/componnent/ContentSide";
import { cookies } from 'next/headers';
import { redirect } from "next/navigation";

export const revalidate = 3600 // revalidate at most every hour
async function getData() {

    //get cookies 
    const cookie = cookies();
    let cookieName;
    let cookieValue;
    cookie.getAll().map((cookieItem) => {
        cookieName = cookieItem.name;
        cookieValue = cookieItem.value;

    })

    // get request in server
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/app/task`, {
        method: "GET",
        headers: {
            'CookieName': cookieName,
            'cookieValue': cookieValue
        },
        credentials: 'include', // include cookies in the request
        withCredentials: true,
    });
    const res = await response.json();
    return res;
}

async function Application() {


    //get response data
    const userData = await getData();


    //check the response was success or failed
    if (!userData.success) {
        redirect("/login");
    }


    return (
        <main className="w-full bg-gray-100">
            <div className="w-full px-5">
                <ContentSide data={userData?.data} />
            </div>
        </main>
    )
}


export default Application;