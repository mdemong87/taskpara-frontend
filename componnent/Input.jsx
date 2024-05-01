'use client'

function Input({ value, setvalue }) {

    return (
        <input value={value} onChange={(e) => { setvalue(e.target.value) }} type="text" className="w-full bg-gray-100 p-2 text-lg text-gray-600 outline-gray-400" />
    )
}

export default Input;