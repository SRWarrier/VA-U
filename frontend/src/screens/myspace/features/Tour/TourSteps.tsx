import type { TourProps } from "antd";
import { getElement } from "../../../../features/Tour/getTourElement";

const steps: TourProps["steps"] = [
  {
    title: "Edit Button",
    description: "Click here to Edit your space",
    target: () =>
      getElement({ tour_id: "myspace__editbutton", emulateClick: true }),
  },
  {
    title: "MySpace Builder",
    description:
      "Here you have options to select various elements you can add to your space",
    target: () => getElement({ tour_id: "myspacebuilder__container" }),
    placement: "left",
  },
  {
    title: "Myspace Tabs",
    description:
      "Myspace Tab has charts, shortcuts and other elements that is available to you to add to your space",
    target: () => getElement({ tour_id: "myspacebuilder__tabs" }),
    placement: "left",
  },
  {
    title: "Myspace Draggable Element",
    description:
      "Draggable element can be dragged on to drop point to add to your space",
    target: () => getElement({ tour_id: "myspacebuilder__draggable" }),
    placement: "left",
  },
  {
    title: "Myspace Drop Point",
    description:
      "Add draggable element on this Drop Point to add the element to your space.",
    target: () =>
      getElement({
        tour_id: "react-grid-layout",
      }),
    placement: "top",
  },

  {
    title: "Drag Demo",
    description:
      "Now, drag a draggable element and drop it onto the Drop Point. An indicator would appear if the element is droppable",
    target: () =>
      getElement({
        tour_id: "site-layout-content",
      }),
    placement: "bottom",
  },
  {
    title: "Resizable Handle",
    description:
      "Drag this handle to resize your elements. Remember, not all elements are resizable",
    target: () => getElement({ tour_id: "react-resizable-handle" }),
    placement: "bottom",
  },
  {
    title: "Chart Settings",
    description: "You can change the settings of chart elements from here.",
    target: () => getElement({ tour_id: "chartmenu__button" }),
    placement: "right",
  },
];

export default steps;
