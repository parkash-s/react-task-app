/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */

import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import Input from '../formInput';


const handleInput = (e)=>{
    return 'sample text'; 
 }
test('Confirm input is working fine.',() => {
    const val = "some text";
    render(<Input type={'text'} 
            name={'inputText'} 
            onchange={handleInput} 
            value={val}
            className="form-control"
            />);    
})
