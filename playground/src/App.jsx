import Lists from "./components/Lists";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Pizzeria from "./components/Pizzeria";
import GenerateJokes from "./components/GenerateJokes";
import Arrays from "./components/Arrays";
import MemeGen from "./components/MemeGen";


function App() {
 
  return (
    <>
      <div className="w-2/4 mt-24 mx-auto shadow-md">
        <Header />
        <Main />
        <Footer />
      </div>

      <div>
          <Lists/>
      </div>
      <Pizzeria/>
      <GenerateJokes/>
      <Arrays/>
      <MemeGen/>
    </>
  );
}

export default App;
