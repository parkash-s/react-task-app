/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
import React from 'react';
import AddTask from '../AddTask';
import {screen, render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import AppTasksContext from '../AppTasksContext';
import WorkList from '../workList';
import UserForm from '../UserForm';

const newTasks = [
    { 
         id:0, 
         work:'I need to start workout on daily basis.',
         done:false,
         update:false
     }, 
     { 
         id:1, 
         work:'I have to start practicing driving a car.',
         done:false,
         update:false
     }, 
 ]

describe("Testing Add Tasks",()=>{
    test('Add Tasks component returns jsx',()=>{
        jest.mock("../AddTask",()=>{
            return jest.fn((props)=>{
                return <>{props.children}</>
            });
        })  
    })

    test("check AddTask component have 'Add Task' button and 'Input TextBox'.",()=>{
        jest.clearAllMocks();
        render(
            <AddTask/>
        )
        expect(screen.getByTestId("buttonToAddSingleTask")).toBeInTheDocument();
        expect(screen.getByTestId("input_ele")).toBeInTheDocument();
    })


    test("check initial number of tasks are more than 0'.",()=>{
        jest.clearAllMocks();
        render(
                <AppTasksContext
                    newTasks={newTasks}
                >
                    <UserForm/>
                </AppTasksContext>
              )
        expect(screen.getAllByTestId("li-element")).toHaveLength(2);
    })
    
    test("check AddTask component's button is clickable.",()=>{
        jest.clearAllMocks();
        let cbfun = jest.fn(()=>{
            console.info("clickable...");
        });
        render(
                <AppTasksContext
                    newTasks={newTasks}
                >
                    <>
                    <input type='text'/>
                    <button onClick={cbfun}>Add Task</button>
                    </>
                    <WorkList/>
                    
                </AppTasksContext>
              )
        
              fireEvent.click(screen.getByText(/Add Task/i));
              expect(cbfun).toHaveBeenCalledTimes(1);
    })
})
