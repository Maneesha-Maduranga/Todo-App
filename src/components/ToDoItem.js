import { useContext } from 'react';
import {AiFillCloseCircle} from 'react-icons/ai'
import ToDoContext from '../context/ToDocontext';



function ToDoitem({todo}) {


  const {dispatch} = useContext(ToDoContext)




  return (
    <li className='py-3 sm:py-4'>
    <div className='flex items-center space-x-4'>
      <div className='flex-1 min-w-0'>
        <p className='text-sm font-medium text-gray-900 truncate dark:text-white'>
          {todo.title}
        </p>
        <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
         {todo.day}
        </p>
        <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
         {todo.time}
        </p>
      </div>
      <div className='inline-flex items-center'>
        <AiFillCloseCircle onClick={()=>dispatch({type:'REMOVE_TODO',id: todo.id })}/>
      </div>
    </div>
  </li>
  );
}

export default ToDoitem;
