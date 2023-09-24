import { message } from "antd";

const Messages = (children: React.ReactNode) => {
  const [messageApi, contextHolder] = message.useMessage();
  return (
    <>
      {contextHolder}
      {children}
    </>
  );
};
