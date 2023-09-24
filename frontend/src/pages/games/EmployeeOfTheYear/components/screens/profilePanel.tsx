import { Card, Image, Typography } from "antd";

const { Title, Paragraph } = Typography;

interface EOTM_ProfilePanelProp {
  characterType: string;
  imageURL: string;
  name: string;
  profileSummary: string;
}

const EOTM_ProfilePanel = ({
  characterType,
  imageURL,
  name,
  profileSummary,
}: EOTM_ProfilePanelProp) => {
  return (
    <Card title={characterType} style={{ minWidth: "300px", height: "70vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={imageURL} preview={false} width={200} height={200} />
        <Title level={3}>{name}</Title>
      </div>
      <div style={{ height: "200px", overflow: "auto" }}>
        <Paragraph style={{ textAlign: "justify", padding: "10px" }}>
          {profileSummary}
        </Paragraph>
      </div>
    </Card>
  );
};

export default EOTM_ProfilePanel;
