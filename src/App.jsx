import { useEffect, useState } from "react";
import "./App.css";
import Todoform from "./components/Todoform";
import Showlist from "./components/Showlist";

function App() {
  const [Todolist, setTodolist] = useState(() => {
    const LocalTask = localStorage.getItem("TODOS")
    if (LocalTask == null) return []
    
    return JSON.parse(LocalTask)
  });

  useEffect(() => {
    localStorage.setItem("TODOS",JSON.stringify(Todolist))
  },[Todolist])

  function addTodo(title, category, addDate, completed) {
    setTodolist((currentTodo) => {
      return [
        ...currentTodo,
        {
          id: crypto.randomUUID(),
          title,
          category,
          addDate,
          completed: false,
        },
      ];
    });
  }

  function completeTodo(id,completed) {
    setTodolist((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodolist((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <Todoform addTodo={addTodo} />
      <Showlist
        todos={Todolist}
        deleteItem={deleteTodo}
        completeTodo={completeTodo}
      />
    </>
  );
}

export default App;
