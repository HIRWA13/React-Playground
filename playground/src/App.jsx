import Lists from "./components/Lists";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Pizzeria from "./components/Pizzeria";
import GenerateJokes from "./components/GenerateJokes";
import Arrays from "./components/Arrays";
import MemeGen from "./components/MemeGen";
import Events from "./components/Events";
import Counter from "./components/States";
import RandomWords from "./components/Words";
import StateVsArrays from "./components/StateArrays";
import FavMemes from "./components/FavMemes";
import Users from "./components/Users";
import Boxes from "./components/Boxes";
import NewItems from "./components/newItems/NewItems";
import Accordions from "./components/Accordions";
import Form from "./components/forms/Form";
import SignUp from "./components/signUp/SignUp";
import UseEffect from "./components/useEffect/UseEffect";

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
      <Events/>
      <Counter/>
      <RandomWords/>
      <StateVsArrays/>
      <FavMemes/>
      <Users/>
      <Boxes/>
      <NewItems/>
      <Accordions/>
      <Form/>
      <SignUp/>
      <UseEffect/>
    </>
  );
}

export default App;
