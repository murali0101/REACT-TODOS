import { useState } from "react";

function TodoInput({ val }) {
  const [data, setData] = useState();
  return (
    <div className="todoInput">
      <input
        type="text"
        name=""
        id="todoInput"
        className="takeInput"
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <button className="btm"
        onClick={() => {
          val(data);
        }}
      >
        +
      </button>
    </div>
  );
}

export default TodoInput;
