import { useState } from 'react';
import memeData from '../assets/memeData.js'

export default function RandomWords() {
    const [memeName, setMemeName] = useState("Get Meme Name")

    const getMeme = () => {
    const memes = memeData.data.memes;
    const randomMemeIndex = Math.floor(Math.random() * memes.length)
    setMemeName(memes[randomMemeIndex].name)
   }

    return (
        <>
            <section className="w-2/4 bg-white p-4 flex flex-col items-center justify-center gap-3 mx-auto mt-10">
                <h1 className='text-2xl'>{memeName}</h1>
                <button onClick={getMeme} className="bg-memeColor text-white py-2 px-4">Generate Meme Names</button>
            </section>
        </>
    );
}