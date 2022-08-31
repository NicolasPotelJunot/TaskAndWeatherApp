import { createSlice } from '@reduxjs/toolkit';


export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {tasks: []},
    reducers: {
      
         addTask: (state, action)=>{
            state.tasks.push(action.payload)
         },

         deleteTask: (state,action)=>{
            // console.log(action.payload)
           const taskfound = state.tasks.find(task=>task.id === action.payload)
           if (taskfound){
            state.tasks.splice(state.tasks.indexOf(taskfound),1)
           }
         },

         editTask:(state,action)=>{
            state.tasks.map((user) => {
               if (user.id === action.payload.id) {
                 user.title = action.payload.title;
                 user.description = action.payload.description;
               }
             });
         },

    }
});


export const { addTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer