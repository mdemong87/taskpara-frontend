'use client'

function Select({ setvalue, value, data }) {


    return (
        <select value={value} onChange={(e) => { setvalue(e.target.value) }} className="w-full bg-gray-100 p-2 text-lg text-gray-600 outline-gray-400">
            {
                data?.map((item, index) => {
                    return (
                        <option key={index} value={item.value}>{item.name}</option>
                    )
                })
            }
        </select>
    )
}

export default Select;