import { useState } from "react";

export default function Accordion(props) {
    const [isShown, setIsShown] = useState(false)
    const cordHandler = () => {
        setIsShown(prev => !prev)
    }
    return (
        <>
            <article>
                <div>
                    <h1 className="text-xl font-semibold">{props.questions.question}</h1>
                </div>
                <div>
                    {isShown && <p>{props.questions.Answer}</p>}
                </div>
                <button onClick={cordHandler} className="bg-blue-500 text-white p-1 cursor-pointer">{!isShown ? "Show" : "Hide"} Accordion</button>
            </article>
        </>
    );
}