import { Card, Typography } from "antd";

const { Paragraph } = Typography;

const EOTMDisclaimer = () => {
  return (
    <Card
      title="Disclaimer"
      headStyle={{
        justifyContent: "center",
        backgroundColor: "rgba(12,132,45,0.5)",
      }}
    >
      <Paragraph>
        This is purely a ficticious game. Any resemblence to any individual,
        organization - living or dead or any incident that have, is, or will be
        occuring sembling any ingame incident are coincidenctal and not
        intentional.{" "}
      </Paragraph>
      <Paragraph>
        The creator of this game or any of his associates are not responsibile
        for your imagination😁.
      </Paragraph>
    </Card>
  );
};

export default EOTMDisclaimer;
