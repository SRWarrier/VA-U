import { HorizontalLayout } from "../../../../layouts";
import { useState, useEffect } from "react";
import { InfoCard } from "../../../../components/charts";
import axios from "axios";

const ClientBoard = () => {
  const [dashboardData, setDashboardData] = useState({
    "Active Client": 0,
    "Inactive Client": 0,
    "Suspended Client": 0,
    "Total Client": 0,
  });

  const [forceData, setForcedata] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/getClientDashboardData/"
        );
        const dashdata = JSON.parse(response.data);
        localStorage.setItem(
          "clientboard_dashdata",
          JSON.stringify({ data: dashdata, savetime: new Date() })
        );
        setDashboardData(dashdata);
      } catch (error) {
        console.error(error);
      }
    };
    const savedData = localStorage.getItem("clientboard_dashdata");
    if (savedData) {
      const { data, savetime } = JSON.parse(savedData);
      const savedTime = new Date(savetime);
      const currentTime = new Date();
      const timeDiff = currentTime.getTime() - savedTime.getTime();
      const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));

      if (hoursDiff >= 1) {
        // Fetch data from API if more than 1 hour has passed
        fetchData();
      } else {
        // Use the saved data
        setDashboardData(data);
      }
    } else {
      // Fetch data from API if no saved data found
      fetchData();
    }
  }, []);

  const components = Object.keys(dashboardData).map((key) => (
    <InfoCard
      caption={key}
      value={dashboardData[key as keyof typeof dashboardData]}
      key={key}
      size="small"
      units="U"
      font_color_type="danger"
    />
  ));

  return (
    <>
      <h1 className="clientboard__title">Client Status</h1>
      <div>
        <HorizontalLayout components={components} editable={false} />
      </div>
    </>
  );
};

export default ClientBoard;
