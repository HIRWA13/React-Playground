import Lists from "./components/DummyComponents/Lists"
import Header from "./components/DummyComponents/Header";
import Footer from "./components/DummyComponents/Footer";
import Main from "./components/DummyComponents/Main";
import Pizzeria from "./components/DummyComponents/Pizzeria";
import GenerateJokes from "./components/DummyComponents/GenerateJokes";
import Arrays from "./components/DummyComponents/Arrays";
import MemeGen from "./components/DummyComponents/MemeGen";
import Events from "./components/DummyComponents/Events";
import Counter from "./components/DummyComponents/States";
import RandomWords from "./components/DummyComponents/Words";
import StateVsArrays from "./components/DummyComponents/StateArrays";
import FavMemes from "./components/DummyComponents/FavMemes";
import Users from "./components/DummyComponents/Users";
import Boxes from "./components/DummyComponents/Boxes";
import NewItems from "./components/newItems/NewItems";
import Accordions from "./components/DummyComponents/Accordions";
import Form from "./components/forms/Form";
import SignUp from "./components/signUp/SignUp";
import UseEffect from "./components/useEffect/UseEffect";
import TaskList from "./components/TodoApp/TaskList";
import TodoApp from "./components/TaskList/TodoApp";
import LocalStorage from "./components/LocalStorage/LocalStorage";
function App() {
 
  return (
    <>
    <LocalStorage/>
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
      {/* <Users/> */}
      <Boxes/>
      <NewItems/>
      <Accordions/>
      <Form/>
      <SignUp/>
      <UseEffect/>
      <TaskList/>
      <TodoApp/>
    </>
  );
}

export default App;
