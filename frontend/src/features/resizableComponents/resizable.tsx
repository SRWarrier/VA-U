import React, { useState, useEffect } from "react";

function Resizable(props) {
  // Define state to store the current dimensions and position of the component
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(100);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  // Define state to store the flag for resizing and the initial mouse coordinates
  const [resizing, setResizing] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // Define a function to handle the mouse down event on the resize handle
  const handleMouseDown = (e) => {
    // Set the flag to true and store the initial mouse coordinates
    setResizing(true);
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  // Define a function to handle the mouse move event on the document
  const handleMouseMove = (e) => {
    // Check if the flag is true
    if (resizing) {
      // Calculate the difference between the current and initial mouse coordinates
      const dx = e.clientX - mouseX;
      const dy = e.clientY - mouseY;

      // Update the dimensions and position of the component based on the difference
      setWidth((prevWidth) => prevWidth + dx);
      setHeight((prevHeight) => prevHeight + dy);
      setLeft((prevLeft) => prevLeft + dx / 2);
      setTop((prevTop) => prevTop + dy / 2);

      // Update the initial mouse coordinates
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    }
  };

  // Define a function to handle the mouse up event on the document
  const handleMouseUp = (e) => {
    // Set the flag to false and stop the resizing process
    setResizing(false);
  };

  // Add event listeners for mouse down, mouse move, and mouse up events using useEffect hook
  useEffect(() => {
    // Get the resize handle element
    const resizeHandle = document.getElementById("resize-handle");

    // Add event listener for mouse down event on the resize handle
    resizeHandle.addEventListener("mousedown", handleMouseDown);

    // Add event listener for mouse move event on the document
    document.addEventListener("mousemove", handleMouseMove);

    // Add event listener for mouse up event on the document
    document.addEventListener("mouseup", handleMouseUp);

    // Remove event listeners when the component unmounts
    return () => {
      resizeHandle.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // Render the component with inline styles based on the state values and a resize handle element with an event handler for mouse down
  return (
    <div
      style={{
        width: width + "px",
        height: height + "px",
        left: left + "px",
        top: top + "px",
        position: "absolute",
        border: "1px solid black",
        backgroundColor: "lightblue",
        boxSizing: "border-box",
      }}
    >
      <div id="resize-handle" style={{ cursor: "nwse-resize" }}>
        ◤
      </div>
      {props.children}
    </div>
  );
}

export default Resizable;
