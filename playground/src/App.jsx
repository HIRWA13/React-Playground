import "./App.css";
import Lists from "./components/Lists";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

// function Lanimals (props) {
//     return (
//       <>
//       <h1>Animals that starts with "L"</h1>
//         <ul>
//           {
//             props.newAnimals.map((animal) => {
//              return  animal.startsWith("L") ? <li key={animal}>{animal}</li> : "404"
//             })
//           }
//         </ul>
//       </>
//     );
// }



function App() {
  const newAnimals = ["Lion", "Cow", "lionHeart","Snake", "Lizard"]
  return (
    <div>
      <div className="w-2/4 mt-24 mx-auto shadow-md">
        <Header />
        <Main />
        <Footer />
      </div>

      <div>
          <Lists/>
      </div>

      {/* <Lanimals/> */}
      
    </div>
  );
}

export default App;
