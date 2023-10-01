export default function Main() {
    return (
      <div className="p-6 bg-white">
        <h1 className="text-3xl font-semibold py-2">Fun Facts about React:</h1>
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
            <li>Is maintained by facebook</li>
          </div>
          <div className="flex items-center gap-3 py-2">
            <div className="h-3 w-3 bg-blue-500 rounded-lg"></div>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
          </div>
        </ul>
      </div>
    );
  }