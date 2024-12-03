/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
import React from 'react';
import {screen, render} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import AppTasksContext from '../AppTasksContext';
import UserForm from '../UserForm';
import AppReducer from '../AppReducer';
import { initialState } from '../InitialStates';





describe("Testing Context-provider with Reducer",()=>{
    function App_reducer(tasks, action){
        console.info("App REducer");
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

    const new_Tasks = [
        { 
            id:0, 
            work:'I want to go away from day-to-day obstructions.',
            done:false,
            update:false
        }, 
        { 
            id:1, 
            work:'I need to be concentrated to finish my work successfully.',
            done:false,
            update:false
        },
    ];
    // const Task_context = React.createContext(null);
    // const Task_dispatch_context = React.createContext(null);
    // const add = dispatch({
    //     type:"add",
    //     id:2,
    //     work:"Is Addinga a task is working well?"

    // })
    test('Testing Add tasks case:',async ()=>{
        render(
                <AppTasksContext 
                    AppReducer={AppReducer} 
                    initialState={initialState}
                >
                    <UserForm/>
                </AppTasksContext>
            );

        let bttn =  screen.getByRole('buttonToAddSingleTask');   
        await userEvent.click(bttn);
        console.info(screen.getByRole('workList3').toBe);
        
        // expect(screen.getByRole('workList3')).textContent = "workList3"
        // expect(screen.getByRole('button',{value:'Add tasks'})).not.toBeNull()


    })
})
