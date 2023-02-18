import { useContext } from "react";
import ToDoContext from "../context/ToDocontext";
import Empty from "./Empty";
import ToDoitem from "./ToDoItem";




function Todo() {


    
    const {todo} = useContext(ToDoContext)   

    if(todo.length == 0){
      return <Empty />
    }else{
      
      return ( 
      <div className='w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
      <div className='flow-root'>
        <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
        <div>
          {
            todo.map((item)=>(
              <ToDoitem todo={item} key={item.id}/>
            ))
          }
        </div>
          
        </ul>
      </div>
    </div>
     );
  }

}

export default Todo;