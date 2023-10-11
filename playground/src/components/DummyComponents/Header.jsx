import { useState } from "react";
import SwitchToggle from "./Switch";

export default function Header() {
  const [isDark, setIsDark] = useState(false)
  const toggleStyles = {
    backgroundColor: "#333333",
  }
  const handleToggle = (checked) => {
    setIsDark(!checked)
    console.log(isDark)
  }
    return (
      <header style={isDark === true ? toggleStyles : {backgroundColor: "white", color: "red"}}>
        <nav className="flex items-center justify-between p-4">
          <img className="h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="react"
          />
          <ul className="flex items-center text-black gap-10">
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
            <SwitchToggle toggleHandler={handleToggle}/>
          </ul>
        </nav>
        <hr/>
      </header>
    );
  }