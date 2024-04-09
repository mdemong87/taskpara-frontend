function AddInputer({ name, value, setvalue }) {


    return (
        <div className="flex justify-between items-center w-full gap-4 my-5">
            <div className="w-[30%] flex items-center justify-between">
                <span className="text-xl font-semibold text-gray-500">{name}</span>
                <span>:</span>
            </div>
            <div className="w-[70%]">
                <input onChange={(e) => { setvalue(e.target.value) }} value={value} type="text" className="w-full bg-gray-100 p-2 text-lg text-gray-600 outline-gray-400" />
            </div>
        </div>
    )
}

export default AddInputer;