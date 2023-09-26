import memes from "../assets/memes";
import MemeCard from "./MemeCard";

export default function FavMemes () {
    const getMemes = memes.map(meme => {
        return <MemeCard
                key={meme.id}
                item={meme}
                />
    })

    return (
        <>
            <section className="w-2/4  mx-auto mt-10 grid grid-cols-2 gap-10">
                {getMemes}
            </section>
        </>
    );
}