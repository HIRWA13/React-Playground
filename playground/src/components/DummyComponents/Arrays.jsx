export default function Arrays (){
    const colors = [<h3>Red</h3>, <h3>Orange</h3>, <h3>Yellow</h3>, <h3>Green</h3>, <h3>Blue</h3>, <h3>Indigo</h3>, <h3>Violet</h3>]
    return (
        <>
            <section className="p-4 bg-white w-2/4 mx-auto mt-5">
                <h1 className="text-2xl font-bold">Arrays with React</h1>
                <p>{colors}</p>
            </section>
        </>
    );
}

// React is intelligent enough to handle arrays of JSX elements as lists and it does that with the help of the map method.