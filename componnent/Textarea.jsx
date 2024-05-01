'use client'

function Textarea({ setdis, value }) {
    return (
        <textarea value={value} onChange={(e) => { setdis(e.target.value) }} className="w-full bg-gray-100 h-[180px] p-2 text-lg text-gray-600 outline-gray-400"></textarea>
    )
}

export default Textarea;