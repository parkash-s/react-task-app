/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import CustomComponent from "../CustomComponent";

test("CustomComponent return a string value based on click and state change",async ()=>{
    // Arrange
    // const myMockFn = jest.mock(CustomComponent);
    // CustomComponent.mockImplementation(()=>"anonymous");

    // console.info(mockCalled+" This is moked function.");
    render(<CustomComponent/>)

    // Act
    let bttn = screen.getByRole('button',{value:'Click Me'});
    await userEvent.click(bttn);

    // Assert
    expect(screen.getByTestId("hding")).toHaveTextContent("A button clicked!");
});