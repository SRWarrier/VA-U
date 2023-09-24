import { Tour } from "antd";
import { TourStepsDispenser } from "./tourStepsDispenser";

interface TourPageProps {
  startTour: boolean;
  setStartTour: (startTour: boolean) => void;
}

const TourPage = ({ startTour, setStartTour }: TourPageProps) => {
  const steps = TourStepsDispenser();
  return (
    <>
      <Tour
        open={startTour}
        onClose={() => setStartTour(false)}
        steps={steps}
      />
    </>
  );
};

export default TourPage;
