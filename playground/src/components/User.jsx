import { useState } from "react";


export default function User (props) {
    // console.log(props.user)
    // const [fav, setFav] = useState(props.user)
    const [star, setStar] = useState(props.user.isFilled)
   
    const starIcon = star ? "star filled.png" : "star unfilled.png"
    const favHandler = () => {
        setStar(prev => !prev)
        console.log(starIcon)
    }
    
    
    return (
        <>
            <article className="bg-white p-4 space-y-2">
                <div> 
                    <img src={props.user.avatar_url} className="rounded-lg"/>
                </div>
                <div className="flex gap-2 items-center">
                    <h1 className="text-xl">{props.user.login}</h1>
                    <img onClick={favHandler} src={`/images/${starIcon}`} className="h-5"/>
                </div>
            </article>
        </>
    );
}