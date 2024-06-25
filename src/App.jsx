import { useState ,useEffect} from "react";
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";
function App() {
  const [todo, setTodo] = useState([
    "Go to gym",
    "Eat Breakfast",
    "Go to office",
    "Eat evening snacks",
    "Go for a walk",
    "Eat Dinner",
    "Go to Bed",
  ]);
  const [todovalue,setTodovalue] = useState('');
   
  function persistData(newList) {
    localStorage.setItem('todo', JSON.stringify({ todo: newList }))
  }
 
  function Handledeletetodo(index) {
    
    const newtodolist = todo.filter((todo,todoind)=>{
        return todoind!= index;
    })
    persistData(newtodolist);
    setTodo(newtodolist);
  }
  
  function HandleEdittodo(index) {
    const valuetobeedited = todo[index];
    setTodovalue(valuetobeedited);
    Handledeletetodo(index);
  }


  function HandleAddTodo(newtodo) {
    const newTodotask = [...todo, newtodo];
    persistData(newTodotask);
    setTodo(newTodotask);
  }
  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todo')
    if (!localTodos) {
      return
    }

    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todo
    setTodo(localTodos)

  }, [])

  return (
    <>
      <Todoinput todovalue = {todovalue} setTodovalue = {setTodovalue} handleAddTodo={HandleAddTodo}></Todoinput>
      <Todolist todos={todo} setTodo={setTodo}  HandleEdittodo = {HandleEdittodo}
      handledeletetodo = {Handledeletetodo}></Todolist>
    </>
  );
}

export default App;
