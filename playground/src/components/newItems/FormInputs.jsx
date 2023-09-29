export default function FormInputs () {
    const titleChangeHandler = (e) => {
        console.log(e.target.value)
    }

    return (
        <>
            <form>
                <div>
                    <div className="mt-4 space-x-6 flex gap-3">
                        <label className="mb-2  font-medium text-gray-900  text-2xl">Title</label>
                        <input type="text" onChange={titleChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5"/>
                    </div>
                    <div className="mt-4 space-x-4 flex gap-3">
                        <label className="mb-2  font-medium text-gray-900  text-2xl">Amount</label>
                        <input type="text" min="0.01" step="0.01" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5"/>
                    </div>
                    <div className="mt-4 space-x-4 flex gap-3">
                        <label className="mb-2  font-medium text-gray-900  text-2xl">Date</label>
                        <input type="date" min="2022-01-01" max="2023-12-31" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5"/>
                    </div>
                </div>
                <div className="mt-5">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Items</button>
                </div>
            </form>
        </>
    );
}