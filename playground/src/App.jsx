import "./App.css";

function Header() {
  return (
    <header className="bg-gray-800">
      <nav className="flex items-center justify-between p-4">
        <img
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

function Main() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold">Fun Facts about React:</h1>
      <ul>
        <div className="flex items-center gap-3 py-2">
          <div className="h-3 w-3 bg-blue-500 rounded-lg"></div>
          <li>Was First released in 2013</li>
        </div>
        <div className="flex items-center gap-3 py-2">
          <div className="h-3 w-3 bg-blue-500 rounded-lg"></div>
          <li>Was originally created by Jordan Walke</li>
        </div>
        <div className="flex items-center gap-3 py-2">
          <div className="h-3 w-3 bg-blue-500 rounded-lg"></div>
          <li>is maintained by facebook</li>
        </div>
        <div className="flex items-center gap-3 py-2">
          <div className="h-3 w-3 bg-blue-500 rounded-lg"></div>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </div>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="p-2 text-center">
      <small>&copy; coded with ❤️ by Junior</small>
    </footer>
  );
}

function App() {
  return (
    <div className="w-1/2 mt-24 mx-auto shadow-md">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
