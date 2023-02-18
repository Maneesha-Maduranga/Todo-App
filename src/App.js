import AddToDO from "./components/AddToDo";
import Todo from "./components/Todo";
import { ToDoContextProvider } from "./context/ToDocontext";
import Footer from "./temp/Footer";
import Navbar from "./temp/Navbar";

function App() {
  return (
    <ToDoContextProvider>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <div className='flex flex-col sm:flex-row py-8 justify-between px-8'>
          <AddToDO />
          <Todo />
        </div>

        <Footer />
      </div>
    </ToDoContextProvider>
  );
}

export default App;
