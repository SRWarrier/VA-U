interface getElementProps {
  tour_id: string;
  emulateClick?: boolean;
  simulateDragDrop?: boolean;
  dragelID?: string;
  checkEmpty?: boolean;
}

const getElement = ({
  tour_id,
  emulateClick = false,
  simulateDragDrop = false,
  dragelID = "",
  checkEmpty = true,
}: getElementProps) => {
  const tourElement = document.querySelector(`.${tour_id}`) as HTMLElement;
  if (emulateClick) {
    tourElement.click();
  }

  if (simulateDragDrop) {
    const dragElement = document.querySelector(`.${dragelID}`) as HTMLElement;
    dragElement.classList.add("dragging");
    tourElement.addEventListener("dragenter", () => {
      tourElement.classList.add("dragging-over");
    });
    tourElement.addEventListener("dragleave", () => {
      tourElement.classList.remove("dragging-over");
    });
    tourElement.addEventListener("drop", (event) => {
      event.preventDefault();
      dragElement.classList.remove("dragging");
      tourElement.classList.remove("dragging-over");
    });
  }
  return tourElement as HTMLElement;
};

export { getElement };
