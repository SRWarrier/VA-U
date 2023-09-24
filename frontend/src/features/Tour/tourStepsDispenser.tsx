import { MySpaceTour } from "./tourIndex";
import { useLocation } from "react-router-dom";

const TourStepsDispenser = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const currentPage = pathSnippets[pathSnippets.length - 1];

  const getTourPage = () => {
    switch (currentPage) {
      case "wave":
        return MySpaceTour;
      default:
        return [
          {
            title: "No Tour!!",
            description:
              "Tour is not available on this page. May god help you 🙏",
          },
        ];
    }
  };

  return getTourPage();
};

export { TourStepsDispenser };
