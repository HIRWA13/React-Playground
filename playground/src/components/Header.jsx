export default function Header() {
    return (
      <header className="bg-gray-800">
        <nav className="flex items-center justify-between p-4">
          <img className="h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="react"
          />
          <ul className="flex items-center text-white gap-10">
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </nav>
      </header>
    );
  }