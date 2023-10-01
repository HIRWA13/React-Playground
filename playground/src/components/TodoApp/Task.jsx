export default function Task(props){
    
    return (
        <>
            <div className="bg-white mt-3 flex items-center justify-between p-2 rounded-md">
                <div>
                    <input type="checkbox"/>
                </div>
                <div>
                    <h1 className="text-lg font-semibold">{props.title}</h1>
                </div>
                <div>
                    <button className="text-white font-medium rounded-lg text-sm text-center bg-memeColor py-4 px-3 cursor-pointer">Delete task</button>
                </div>
            </div>
        </>
    );
}