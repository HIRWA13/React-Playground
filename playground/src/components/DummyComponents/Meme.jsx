import { useState } from "react";
import memeData from "../../assets/memeData";


export default function Meme(){
    const [memeImg, setmemeImg] = useState("")
    const getMemes = () => {
        const memeImgs = memeData.data.memes;
        const randomIndex = Math.floor(Math.random() * memeImgs.length)
        setmemeImg(memeImgs[randomIndex].url)        
    }

    return (
        <>
           <div className="mt-2 flex items-center justify-center flex-col space-y-3 w-3/4 mx-auto p-4">
                <div className="grid grid-cols-2 gap-3">
                    <input type="text" className="border-2 p-1"/>
                    <input type="text" className="border-2 p-1"/>
                </div>
                <button className="bg-memeColor p-2 w-full text-white" onClick={getMemes}>Generate</button>
                <img src={memeImg} className="w-full"/>
           </div>
        </>
    );
}