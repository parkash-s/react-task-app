/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
import React, { useReducer } from "react";
import { getByRole, getByTestId, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import AppTasksContext from "../AppTasksContext";
import WorkList from "../workList";
import AppReducer from "../AppReducer";
import UserForm from '../UserForm';
import { initialState } from "../InitialStates";
import { getNewStateAndDispatch } from "../app_functions";

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
         update:true
     }, 
     { 
         id:2, 
         work:'I have to get a driving licence.',
         done:false,
         update:false
     }, 
     { 
         id:3, 
         work:'This is fourth task.',
         done:false,
         update:false
     }
 ]

describe("Testing worklist events.",()=>{
 
    test("1. Check fourth task is in the document.",async ()=>{
            render(
                <AppTasksContext
                    newTasks={newTasks}
                >
                    <WorkList/>
                </AppTasksContext>
                )
            expect(screen.getByTestId("workList3")).toBeInTheDocument();
    })
})

describe("Test update tasks section",()=>{
    const newTasks = [
        { 
            id:0, 
            work:'I need to start workout on daily basis.',
            done:false,
            update:true
        }, 
        { 
            id:1, 
            work:'I have to start practicing driving a car.',
            done:false,
            update:false
        }, 
    ]
    test("Check complete update button is in the document.", async ()=>{
        render(
            <AppTasksContext
                newTasks={newTasks}
            >
                <WorkList/>
            </AppTasksContext>
            )
            let bttn1 = screen.getByTestId("buttonToCompleteUpdate0");
            expect(bttn1).toBeInTheDocument();
    })
})


describe("Test update tasks section",()=>{
    const newTasks = [
        { 
             id:0, 
             work:'I need to start workout on daily basis.',
             done:false,
             update:true
         }, 
         { 
             id:1, 
             work:'I have to start practicing driving a car.',
             done:false,
             update:false
         }, 
     ]
    test("Check update textbox is visible.", async ()=>{
        render(
            <AppTasksContext
                newTasks={newTasks}
            >
                <WorkList/>
            </AppTasksContext>
            )
            let textB = screen.getByTestId("textBoxToUpdate0");
            expect(textB).toBeInTheDocument();
    })
})

describe("Test update tasks section",()=>{
    test("Check update textbox value.", async ()=>{
        render(
            <AppTasksContext
                newTasks={newTasks}
            >
                <WorkList/>
            </AppTasksContext>
            )
            let textB = screen.getByTestId("textBoxToUpdate1");
            expect(textB).toHaveValue("I have to start practicing driving a car.");
    })
})

describe("Test Delete tasks section",()=>{
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
             update:true
         }, 
        ]
    // test("Count no. of work items left after clicking Delete button.", async ()=>{
    //     render(
    //         <AppTasksContext
    //             newTasks={newTasks}
    //         >
    //             <WorkList/>
    //         </AppTasksContext>
    //         )
    //         let bttn = screen.getByTestId("buttonToDelete0");
    //         let spn = screen.getByTestId("workList0")
    //         await userEvent.click(bttn);
    //         expect(bttn).not.toBeInTheDocument();
    //         expect(spn).not.toBeInTheDocument();
    // })
})
