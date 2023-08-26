import React from "react";
import TodoItem from "./TodoItem";



const Showlist = ({ todos,deleteItem,completeTodo}) => {
  return (
    <div className="w-full p-5 grid grid-cols-1 gap-6 sm:grid sm:space-y-0 sm:gap-6 sm:grid-cols-2 md:grid  md:grid-cols-3 md:space-y-0 mt-10 text-lg font-bold">
      {todos.length === 0 && "No Todos"}

      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            deleteTodo={deleteItem}
            completeTodo={completeTodo}
          />
        );
      })}
    </div>
  );
};

export default Showlist;
