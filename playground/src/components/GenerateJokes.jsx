import Jokes from './Jokes'

export default function GenerateJokes() {
    /**
     * we can also be able to add some non-string values into our properties and because of-course Javascript is not all about strings.
     * we can add non-string props by using {} braces because braces allows us to add JavaScript inside JSX
     */
    return (
        <>
            <article className='w-2/4 mx-auto bg-white rounded-md p-2 mt-4'>
                <h1 className='text-2xl font-semibold'>Jokes to make you unlaugh</h1>
                <Jokes 
                punchline={" I can't wait to see her face light up when she opens it."}
                votes={10}
                isFunny={true}
                />
                <Jokes setup={"How did the hacker escape the police?"} 
                votes={10}
                isFunny={true}
                />
                <Jokes setup={" Why don't pirates travel on mountain roads?"} 
                punchline={"Scurvy."}
                votes={10}
                isFunny={true}
                />
                <Jokes punchline={"Swarm"}/>
                <Jokes setup={"What's the best thing about Switzerland?"}/>
            </article>
        </>
    );
}