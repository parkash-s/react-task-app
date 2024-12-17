import React,{useReducer} from "react";
import '@testing-library/jest-dom'
import '@testing-library/react';
import { getNewStateAndDispatch, action_add, getDispatch, add_single_task, } from "../app_functions";
import AppReducer from "../AppReducer";
import { initialState } from "../InitialStates";

describe("Testing App Functions",()=>{
    test("add action function returns action object.",()=>{
        const inputText = "This is a testing task.";
        const nextId = 4;
        const addAct = action_add(inputText,nextId);
        console.info(addAct);
    })
})