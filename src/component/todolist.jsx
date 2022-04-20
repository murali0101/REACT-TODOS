import '../App.css'
function TodoList({ val1, val2, val3 }) {
   
    return <div >
        <div>{val1.map((ele, ind) => {
                
            return (<div className='todoList'>
                <div className={`${ele.status?"green":"red"}`} onClick={() => {
                    val3(ind)
                }}></div>
              <div className={`${ele.status?"strike":"strike-non"}`}>  {ele.task} </div>
                <button onClick={() => {
                    val2(ind)
                }}>delete</button>
            </div>)
        })}</div>
  </div>;
}

export default TodoList