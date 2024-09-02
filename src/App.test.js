import { render, screen } from "@testing-library/react";
import App from './App';
import { expect } from "vitest";

it("should have hello world",()=>{
    render(<App />);
    const message = screen.queryByText(/hello world/i);
    expect(message).toBeVisible();

})