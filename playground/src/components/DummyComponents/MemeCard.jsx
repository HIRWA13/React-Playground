export default function MemeCard(props) {

    return (
        <>
            <article className="bg-white">
                <div className="w-full">
                    <img src={props.item.url} className="w-full"/>
                </div>
                <div>
                    <h1 className="text-2xl font-semibold">{props.item.name}</h1>
                </div>
            </article>
        </>
    );
}