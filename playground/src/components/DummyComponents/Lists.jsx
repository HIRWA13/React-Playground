function Lists() {
    const animals = ["Lion", "Cow", "lionHeart","Snake", "Lizard"]
    const animalLists = animals.map((animal) => <li className="mt-2 text-lg" key={animal}>{animal}</li>)

    return (
        <>
            <div className="bg-white mt-5 w-1/2 mx-auto p-4">
                <h1 className="text-2xl font-semibold">Domestic Animals:</h1>
                {/* <ul>
                    {animals.map((animal) => {
                        return <li className="mt-2 text-lg">{animal}</li>
                    })}
                </ul> */}
                <ul>
                    {animalLists}
                </ul>
            </div>
        </>
    );
}

export default Lists