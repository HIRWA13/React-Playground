import { useState } from "react";

export default function Box (props) {
    const [color, setColor] = useState(props.on)
    const colorHandler = () => {
        setColor(prev => !prev)
    }
    const styles = {
        backgroundColor: color ? "#222222" : "#ffffff"
    }
    return (
        <>
            <div style={styles} onClick={colorHandler} className="border-2 border-black h-28 rounded-xl" ></div>
        </>
    );
}