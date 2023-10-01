import { useState } from "react";
import boxes from "../../assets/boxes";
import Box from "./Box";

export default function Boxes() {
    const [squares, setSquares] = useState(boxes)
  
    const getBoxes = boxes.map(square => {
        return <Box key={square.id} on={square.on}/>
    })

    return (
        <>
            <section className="w-3/4  mx-auto mt-10 grid grid-cols-3 gap-10">
                {getBoxes}
            </section>
        </>
    );
}