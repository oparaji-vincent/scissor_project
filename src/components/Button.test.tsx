import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders with children and custom class", () => {
    const text = "Click Me";
    render(<Button className="btn-primary">{text}</Button>);

    const button = screen.getByRole("button", { name: text });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn-primary");
  });

  it("triggers onclick event when clicked", () => {
    const handleClick = vi.fn();
    const text = "Click Me";
    render(
      <Button className="btn-primary" onclick={handleClick}>
        {text}
      </Button>
    );

    const button = screen.getByRole("button", { name: text });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
