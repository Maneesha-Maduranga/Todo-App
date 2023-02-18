import { useState,useContext } from "react";
import ToDoContext from "../context/ToDocontext";



function AddToDO() {

    const {dispatch} = useContext(ToDoContext)

    const [title,setTitle] = useState('')
    const [day,setDay] = useState('')
    const [time,setTime] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.length === 0 && day.length === 0 && time.length === 0){
            alert("Please add ToDo's");
            
        }else{
            dispatch({type:'ADD_TODO',todo:{
                title:title,
                day:day,
                time:time,
            }})
            setDay('')
            setTime('')
            setTitle('')
        }
    }




    return ( 
        <div className="w-full max-w-sm p-4 bg-base-100 border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 place-self-center">
                <form className="space-y-6" onSubmit={handleSubmit}>
                <h5 className="text-xl font-medium">Add Your ToDo's</h5>
                <div>
                    <label htmlFor="Title" className="block mb-2 text-sm font-medium ">Title</label>
                    <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" ></input>
                </div>
                <div>
                    <label htmlFor="Date" className="block mb-2 text-sm font-medium ">Date</label>
                    <input type="text" value={day} onChange={(e)=> setDay(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"></input>
                </div>
                <div>
                    <label htmlFor="Time" className="block mb-2 text-sm font-medium ">Time</label>
                    <input type="text"  value={time} onChange={(e)=> setTime(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"></input>
                </div>
                <button type="submit" className="w-full  hover:bg-base-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add</button>
                </form>
        </div>
     );
}

export default AddToDO;