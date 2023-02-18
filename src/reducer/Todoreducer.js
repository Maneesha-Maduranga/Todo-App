import { v4 as uuidv4 } from 'uuid';


export const ToDoreducer = (state,action) => {

    switch(action.type){
        case 'ADD_TODO':
            let id = uuidv4();
            return(
                [...state,{
                    id: id,
                    title:action.todo.title,
                    day:action.todo.day,
                    time:action.todo.time
                }]
            )
        case 'REMOVE_TODO':
            return(
                state.filter((todo) => todo.id !== action.id)
            )
        default:
            return state

    }


}