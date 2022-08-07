import { createSlice } from '@reduxjs/toolkit';

const initialState= []

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
         addTask: (state, action)=>{
            state.push(action.payload)
         },

         editTask:(state,action)=>{
            const {id,title,description} = action.payload

            const foundTask = state.find(task=> task.id === id)

            if(foundTask){
                foundTask.title= title
                foundTask.description= description
            }
         },

         deleteTask: (state,action)=>{
            // console.log(action.payload)
           const taskfound = state.find(task=>task.id === action.payload)
           if (taskfound){
            state.splice(state.indexOf(taskfound),1)
           }
         },

    }
});


export const { addTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer