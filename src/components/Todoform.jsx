import React from "react";
import { useState } from "react";

const Todoform = ({addTodo}) => {
  const [todotext, setTodotext] = useState("");
  const [selectOption, setSelectOption] = useState("College");
  const [addDate, setAddDate] = useState(new Date().toLocaleString([],{hour: '2-digit',minute:'2-digit',hour12:true}));

     function selectChange(e) {
       setSelectOption(e.target.value);
     }

  function handleSubmit(e) {
    setAddDate(new Date().toLocaleTimeString());
    console.log(addDate);
     
     e.preventDefault();
     if (todotext==="")  return
    
     addTodo(todotext,selectOption,addDate);
     setTodotext("");
   }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 place-items-center gap-4 pt-10"
      >
        <div>
          <input
            type="text"
            id="todoname"
            value={todotext}
            className="p-4 border-2 rounded-lg w-[300px] text-lg overflow-hidden md:w-[500px] focus:outline-sky-600"
            placeholder="Enter Todo Task"
            onChange={(e) => setTodotext(e.target.value)}
            required
          />
        </div>

        <div className="w-full">
          <ul className="flex justify-center space-x-10">
            <li>
              <input
                type="radio"
                id="college"
                name="category"
                value="College"
                className="hidden peer"
                onChange={selectChange}
                checked={selectOption === "College"}
              />
              <label
                htmlFor="college"
                className="inline-flex items-center justify-between w-full p-4 text-gray-600 bg-white border border-gray-200 rounded-lg cursor-pointer   peer-checked:border-sky-600 peer-checked:text-sky-600 hover:text-gray-600 hover:bg-gray-100 "
              >
                <div className="block">
                  <div className="w-full text-lg font-semibold">College</div>
                </div>
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="others"
                name="category"
                value="Others"
                className="hidden peer"
                onChange={selectChange}
                checked={selectOption === "Others"}
              />
              <label
                htmlFor="others"
                className="inline-flex items-center justify-between w-full p-4 text-gray-600 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-sky-600 peer-checked:text-sky-600 hover:text-gray-600 hover:bg-gray-100 "
              >
                <div className="block">
                  <div className="w-full text-lg font-semibold">Others</div>
                </div>
              </label>
            </li>
          </ul>
        </div>
        <div>
          <button className="bg-sky-600 text-white p-4 rounded-lg font-semibold text-lg w-[200px] text-center">
            Add Task
          </button>
        </div>
      </form>
    </>
  );
};

export default Todoform;
