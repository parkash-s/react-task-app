/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppTasksContext from "../AppTasksContext";
import WorkList from "../workList";

describe("Testing App Tasks Context.",()=>{
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
    test("AppTaskContext is able to send data to its childrens.",()=>{
        render(
            <AppTasksContext
                newTasks={newTasks}
            >
                <WorkList/>
            </AppTasksContext>
        );
        expect(screen.getByTestId("workList0")).toBeInTheDocument();
    })

    test("AppTaskContext return jsx.",()=>{
      jest.mock("../AppTasksContext.js",()=>{
        return jest.fn((props)=>props.children);
      })  
    })
})