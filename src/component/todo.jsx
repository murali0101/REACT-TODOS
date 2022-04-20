import { useState } from "react";
import TodoInput from "./todoinput";
import TodoList from "./todolist";
import CompletedTodo from "./CompletedTodos";
import "../App.css";
function Todo() {
  const [todoData, setTodoData] = useState([]);
  const [todoData1, setTodoData1] = useState({status:false});
  function getData(val) {
    setTodoData([...todoData, { task: val, status: false }]);
  }
  function deleteData(val) {
    todoData.splice(val, 1);
    setTodoData([...todoData]);
  
  }
  function updataData(val) {
    todoData[val].status = !todoData[val].status;
    setTodoData([...todoData]);
   
  }
  function showTodo(val) {
    setTodoData1({status:!val});
  }
 
  return (
    <div className="todoApp">
      <TodoInput val={getData} />
      <TodoList val1={todoData} val2={deleteData} val3={updataData} />
      <button
        onClick={() => {
          showTodo(todoData1.status);
        }}
      >
        Show Completed Todos
      </button>
 
      <CompletedTodo val1={todoData} val2={deleteData} val3={updataData}  val4={todoData1}  />
    </div>
  );
}

export default Todo;
