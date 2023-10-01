export default function Jokes(props) {
    // what if some of the jokes were only punchlines without the setup?
    // then here we could introduce the concepts of conditional rendering
    // the conditional rendering is a concept where we use a condition inorder to render the a component

    return (
        <>
            <div className="border-2 rounded-md mt-2 p-2">
                {props.setup && <p>Setup:{props.setup}</p>}
                {props.punchline && <h1 className="text-lg font-semibold"> Punchline: {props.punchline}</h1>}
            </div>
        </>
    );
}