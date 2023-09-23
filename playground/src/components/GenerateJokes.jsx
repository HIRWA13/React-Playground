import Jokes from './Jokes'

export default function GenerateJokes() {
    return (
        <>
            <article className='w-2/4 mx-auto bg-white rounded-md p-2 mt-4'>
                <h1 className='text-2xl font-semibold'>Jokes to make you unlaugh</h1>
                <Jokes punchline={" I can't wait to see her face light up when she opens it."}/>
                <Jokes setup={"How did the hacker escape the police?"} />
                <Jokes setup={" Why don't pirates travel on mountain roads?"} punchline={"Scurvy."}/>
                <Jokes punchline={"Swarm"}/>
                <Jokes setup={"What's the best thing about Switzerland?"}/>
            </article>
        </>
    );
}