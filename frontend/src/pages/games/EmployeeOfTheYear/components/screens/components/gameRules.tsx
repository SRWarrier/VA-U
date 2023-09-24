import { Typography, Card, Divider } from "antd";
import EOTMDisclaimer from "./disclaimerComponent";

const { Title, Paragraph } = Typography;

const EOTMGameRules = () => {
  return (
    <>
      <Card
        title={<Title level={3}>Welcome to Employee of the Month Game</Title>}
        style={{
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          overflow: "auto",
          height: "40vh",
        }}
      >
        <Paragraph>
          <strong>Objective:</strong> Make as much profit as possible within 30
          days 💰.
        </Paragraph>
        <Paragraph>
          <strong>Characters:</strong> Client, Vendor, Supervisor, Finance.
        </Paragraph>
        <Title level={4}>Clients</Title>
        <Paragraph>
          Clients have various traits like vehicle requirements, payment cycle,
          responsiveness, and escalation matrix. Keeping clients satisfied by
          delivering goods on time and in good condition is crucial.
        </Paragraph>
        <Title level={4}>Vendors</Title>
        <Paragraph>
          Vendors' traits include number of vehicles, vehicle types served,
          vehicle condition, documentation quality, and payment tolerance.
          Timely payments help keep vendors satisfied.
        </Paragraph>
        <Title level={4}>Sales & Operations</Title>
        <Paragraph>
          These employees' traits include effective communication, follow-up
          quality, client engagement, and vendor retention. Keep them happy by
          timely appreciations and rewards.Happy employees bring in new clients
          and vendors, boosting sales.
        </Paragraph>
        <Title level={4}>Finance</Title>
        <Paragraph>
          Finance team traits are fixed. They may push for collection, and you
          can negotiate payment cycles.
        </Paragraph>
        <Title level={3}>How to Play</Title>
        <Paragraph>
          In the Employee of the Month game, you are in charge of a logistics
          company. Your goal is to maximize profits within a 30-day period.
        </Paragraph>
        <Paragraph>
          <strong>1. Clients:</strong> Monitor client traits such as vehicle
          requirements and payment cycle. Keep clients satisfied by delivering
          goods on time and meeting their expectations.
        </Paragraph>
        <Paragraph>
          <strong>2. Vendors:</strong> Manage vendor traits including vehicle
          types served and documentation quality. Timely payments to vendors
          ensure their satisfaction and smooth operations.
        </Paragraph>
        <Paragraph>
          <strong>3. Sales & Operations:</strong> Handle employee traits like
          effective communication and client engagement. Satisfied employees
          bring in new clients and vendors, contributing to increased sales.
        </Paragraph>
        <Paragraph>
          <strong>4. Finance:</strong> Work with the finance team to manage
          payments and collections. Negotiate with vendors and clients to
          optimize cash flow and maintain a balanced financial position.
        </Paragraph>
        <Paragraph>
          <strong>5. Decision Making:</strong> Make strategic decisions to
          balance client satisfaction, vendor relationships, employee morale,
          and financial stability. Keep an eye on the 30-day timeline to achieve
          maximum profit.
        </Paragraph>
        <Paragraph>
          <strong>6. Monitoring:</strong> Regularly check reports and feedback
          from clients, vendors, employees, and finance to assess performance
          and make informed decisions.
        </Paragraph>
        <Paragraph>
          <strong>7. Achievements:</strong> Earn rewards by achieving milestones
          such as high client satisfaction, efficient vendor management, and
          optimal financial health.
        </Paragraph>
        <Paragraph>
          <strong>8. Game Over:</strong> The game ends after 30 days or if you
          loose all of any of either Client, Vendor, Employee. Your performance
          will be evaluated based on profit, client satisfaction, vendor
          relationships, and employee morale.
        </Paragraph>
        <Paragraph>
          Now that you know how to play, dive into the world of logistics,
          decision-making, and strategic management in the Employee of the Month
          game. Best of luck!
        </Paragraph>
      </Card>
      <Divider />
      <EOTMDisclaimer />
    </>
  );
};

export default EOTMGameRules;
