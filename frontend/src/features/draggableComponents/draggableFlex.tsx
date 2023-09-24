import React, { useState, useEffect } from "react";

function Draggable(props) {
  // Define state to store the current position and offset of the component
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  // Define state to store the flag for dragging and the initial mouse coordinates
  const [dragging, setDragging] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // Define a function to handle the mouse down event on the component
  const handleMouseDown = (e) => {
    // Set the flag to true and store the initial mouse coordinates and offset
    setDragging(true);
    setMouseX(e.clientX);
    setMouseY(e.clientY);
    setOffsetX(e.target.offsetLeft - e.clientX);
    setOffsetY(e.target.offsetTop - e.clientY);
  };

  // Define a function to handle the mouse move event on the document
  const handleMouseMove = (e) => {
    // Check if the flag is true
    if (dragging) {
      // Update the position of the component based on the mouse movement and offset
      setLeft(e.clientX + offsetX);
      setTop(e.clientY + offsetY);
    }
  };

  // Define a function to handle the mouse up event on the document
  const handleMouseUp = (e) => {
    // Set the flag to false and stop the dragging process
    setDragging(false);
  };

  // Add event listeners for mouse down, mouse move, and mouse up events using useEffect hook
  useEffect(() => {
    // Add event listener for mouse move event on the document
    document.addEventListener("mousemove", handleMouseMove);

    // Add event listener for mouse up event on the document
    document.addEventListener("mouseup", handleMouseUp);

    // Remove event listeners when the component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  // Render the component with inline styles based on the state values and absolute positioning and CSS transformations
  return (
    <div
      style={{
        left: left + "px",
        top: top + "px",
        position: "absolute",
        transform: `translate(${left}px, ${top}px)`,
        cursor: "move",
      }}
      onMouseDown={handleMouseDown}
    >
      {props.children}
    </div>
  );
}

export default Draggable;