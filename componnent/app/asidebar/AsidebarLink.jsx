'use client'


import { useStore } from "@/lib/store";
import Link from "next/link";

function AsideberLink({ linkname, icon }) {

    const setasideShow = useStore((state) => state.setasideShow);

    return (
        <Link onClick={() => setasideShow(false)} className={`text-gray-500 rounded-md px-3 py-2 flex items-center gap-2 transition ease-in-out delay-50 hover:bg-gray-200 ${linkname === "Tasks" && "bg-gray-200"}`} href="/app">
            {icon}
            <span>{linkname}</span>
        </Link>
    )
}

export default AsideberLink;