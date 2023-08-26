import React from "react";

const TodoItem = ({ todo, deleteTodo, completeTodo }) => {
  return (
    <div
      className=" bg-white py-5 px-5 font-semibold text-lg rounded-xl space-y-2 overflow-hidden md:max-w-md"
      >
      <div className="flex justify-between">
        <p className={`${todo.completed ? "line-through" : ""}`}>
          {todo.title}
        </p>
        <input
          type="checkbox"
          name="taskdone"
          id="taskdone"
          className="w-10 h-7"
          onChange={e => completeTodo(todo.id, e.target.checked)}
          checked={todo.completed}
        />
      </div>
      <p className={`text-gray-500 ${todo.completed ? "line-through" : ""}`}>
        {todo.category}
      </p>
      <hr />

      <div className="flex justify-between items-center ">
        <p className="text-gray-600 text-[14px]">
          Last Updated :<span className="text-gray-400 px-2">{todo.addDate}</span>
        </p>

        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-sky-600 text-white px-3 rounded-lg py-1"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
