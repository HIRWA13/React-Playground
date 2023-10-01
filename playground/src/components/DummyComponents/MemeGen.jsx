import MemeHeader from "./memeHeader";
import Meme from "./Meme";

export default function MemeGen() {
    return (
        <>
            <section className="w-2/5 mx-auto bg-white mt-8">
                <MemeHeader/>
                <Meme/>
            </section>
        </>
    );
}