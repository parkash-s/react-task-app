export default function AppReducer(tasks, action){
    switch (action.type){
        case "add":{
           return [
                    ...tasks,
                    {
                        id:action.id,
                        work:action.work,
                        done:false,
                        update:false
                    },
                  ];
        }

        case "delete": {
            return tasks.filter((item)=>{
                        return item.id !== action.id
                    })
        }

        case "update": {
            return tasks.map((item)=>{
                if(item.id === action.id){
                    return {
                        ...item,
                        done:action.done,
                    }
                }else{
                    return item;
                }
        })
    }

        case "open update input":{
            return tasks.map((item)=>{
                if(item.id === action.id){
                   return {
                    ...item,
                    update:action.update
                   }
                }else{
                   return item;
                }
            }
        )
    }

        case "complete update":{
            return tasks.map((item)=>{
                if(item.id === action.id){
                    return {
                        ...item,
                        work:action.work,
                        update:action.update
                    };
                 }else{
                    return item;
                 } 
            })
        }

        default : {
            throw Error("unknown action: "+ action.type);
        }
    }
}
