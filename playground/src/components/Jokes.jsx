export default function Jokes(props) {
    return (
        <>
            <div className="border-2 rounded-md mt-2 p-2">
                <p>{props.setup}</p>
                <h1 className="text-lg font-semibold">{props.punchline}</h1>
            </div>
        </>
    );
}