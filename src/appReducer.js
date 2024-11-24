
const AppReducer = (tasks, action)=>{
    switch (action.type){
        case "add":{
           return [
                    ...tasks,
                    {
                        id:action.id,
                        work:action.work,
                        done:false,
                        updat:false
                    },
                  ];
        }

        case "delete": {
            return tasks.filter((item)=>{
                        return item.id !== action.id
                    })
        }

        case "update":
            return tasks.map((item)=>{
                if(item.id === action.changedItem.id){
                    return action.changedItem;
                }else{
                    return item;
                }
        })

        case "open update input":
            return tasks.map((item)=>{
                if(item.id === action.changedUpdate.id){
                   return action.changedUpdate;
                }else{
                   return item;
                }
            }
        )

        case "complete update":
            return tasks.map((item)=>{
                if(item.id === action.updateTask.id){
                    return action.updateTask;
                 }else{
                    return item;
                 } 
            })

        default : {
            throw Error("unknown action: "+ action.type);
        }
    }
}

export default AppReducer;