import '../App.css'
function CompletedTodo({ val1, val2, val3,val4}) {
  
    return <div > 
       
        <div>{val1.map((ele, ind) => {
          
           if (ele.status == true && val4.status==true) {
                   
             
            return (<div className='todoList'>
                <div className={`${ele.status?"green":"red"}`} onClick={() => {
                    val3(ind)
                }}></div>
              <div className={`${ele.status?"strike":"strike-non"}`}>  {ele.task} </div>
                <button onClick={() => {
                    val2(ind)
                }}>delete</button>
               </div>)
                 }
        })}</div>
  </div>;
}

export default CompletedTodo