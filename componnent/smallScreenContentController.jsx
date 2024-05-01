
function SmallScreenContentController({ setcontroler }) {
    return (
        <div className="flex justify-between items-center px-1 pb-2 mt-3 border-b-2 border-gray-300 lg:hidden">
            <select onChange={(e) => setcontroler(e.target.value)} className="w-full bg-gray-100 p-2 text-lg text-gray-600 outline-gray-400">
                <option value={"Brief"}>Brief</option>
                <option value="To-Do">To-Do</option>
                <option value="In-Progress">In Progress</option>
                <option value="Complete">Complete</option>
            </select>
        </div >
    )
}

export default SmallScreenContentController;