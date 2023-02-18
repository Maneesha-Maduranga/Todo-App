import {FaSmile} from 'react-icons/fa'


function Empty() {
  return (
    <div className='w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
        
       
      <p className='font-normal text-gray-700 dark:text-gray-400'>
        You Don't Have ToDo's  <span><FaSmile size={50}/></span>
      </p>
     
       
       
    </div>
  );
}

export default Empty;
