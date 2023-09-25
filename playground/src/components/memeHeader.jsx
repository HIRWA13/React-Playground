export default function MemeHeader() {
    return (
        <>
            <header className="flex items-center justify-between p-4 bg-memeColor text-white">
                <div className="flex items-center gap-3">
                    <img src="/images/trollface.svg"/>
                    <h1 className="text-xl font-semibold">Meme Generator</h1>
                </div>
                <div>
                    <p>project~3</p>
                </div>
            </header>
        </>
    );
}