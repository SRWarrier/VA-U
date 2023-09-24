interface SatisfactionScale {
  Dismal: number;
  Moderate: number;
  Pleased: number;
  Delighted: number;
}

interface ClientProps {
  id: string;
  type: string;
  name: string;
  industry: "Food" | "Groceries" | "Electronics" | "Textiles" | "Furniture";
  initialDailyRequirement: number;
  paymentConsitencyfactor: SatisfactionScale;
  paymentCycle: number;
  responsiveness: "high" | "moderate" | "low";
  escalationMatrix: "defined" | "unclear" | "none";
  summary: string;
  imageURL: string;
}

const clients: ClientProps[] = [
  {
    id: "DELI",
    type: "Client",
    name: "Delicious Kitchen",
    imageURL: "/game_assets/EOTM/client1.png",
    industry: "Food",
    initialDailyRequirement: 6,
    paymentConsitencyfactor: {
      Dismal: 1.5,
      Moderate: 1.2,
      Pleased: 0.5,
      Delighted: 1,
    },
    paymentCycle: 6,
    responsiveness: "high",
    escalationMatrix: "defined",
    summary:
      "Delicious Kitchen is a client operating in the food industry. They have an initial daily requirement of 6 deliveries. The payment consistency factor varies based on their satisfaction level, ranging from a high of 1.5 times the regular payment to a low of 0.5 times. Their payment cycle is set at 6 days, which is the frequency at which they make payments for the services.Delicious Kitchen is known for their high responsiveness, meaning they provide prompt feedback and clear communication. Additionally, they have a defined escalation matrix in place, indicating the steps they take to address any issues or concerns that may arise during the course of business.",
  },
  {
    id: "TOOF",
    type: "Client",
    name: "Toofan Trousers",
    imageURL: "/game_assets/EOTM/client2.png",
    industry: "Textiles",
    initialDailyRequirement: 2,
    paymentConsitencyfactor: {
      Dismal: 2,
      Moderate: 1.5,
      Pleased: 1.2,
      Delighted: 1,
    },
    paymentCycle: 4,
    responsiveness: "moderate",
    escalationMatrix: "unclear",
    summary:
      "Toofan Trousers operates within the textiles industry and has an initial daily requirement of 2 deliveries. Their payment consistency factor varies based on their satisfaction level, ranging from a high of 2 times the regular payment to a low of 1 times. The payment cycle is set at 4 days, representing the frequency at which they make payments for the services provided.Toofan Trousers demonstrates a moderate level of responsiveness, implying a balanced approach to communication and feedback. However, their escalation matrix is unclear, suggesting that the process for addressing issues may not be well-defined or easily understood.",
  },
  {
    id: "LIVM",
    type: "Client",
    name: "Livmore Spaces",
    imageURL: "/game_assets/EOTM/client3.png",
    industry: "Furniture",
    initialDailyRequirement: 4,
    paymentConsitencyfactor: {
      Dismal: 2,
      Moderate: 1.2,
      Pleased: 1,
      Delighted: 0.7,
    },
    paymentCycle: 5,
    responsiveness: "moderate",
    escalationMatrix: "unclear",
    summary:
      "Livmore Spaces operates in the furniture industry, with an initial daily requirement of 4 deliveries. Their payment consistency factor varies depending on their satisfaction level, ranging from a high of 2 times the regular payment to a low of 0.7 times. The payment cycle is set at 5 days, indicating the frequency of payments for the services rendered.Livmore Spaces demonstrates a moderate level of responsiveness, suggesting that they provide reasonable feedback and maintain open communication channels. However, their escalation matrix is unclear, indicating that the process for addressing escalated issues may not be well-defined or transparent.",
  },
  {
    id: "BIGT",
    type: "Client",
    name: "BigTrolley Groceries",
    imageURL: "/game_assets/EOTM/client4.png",
    industry: "Groceries",
    initialDailyRequirement: 2,
    paymentConsitencyfactor: {
      Dismal: 2,
      Moderate: 1.7,
      Pleased: 1.2,
      Delighted: 0.9,
    },
    paymentCycle: 2,
    responsiveness: "low",
    escalationMatrix: "none",
    summary:
      "BigTrolley Groceries operates in the groceries industry, with a daily requirement of 2 deliveries. The payment consistency factor varies based on their satisfaction level, ranging from a high of 2 times the regular payment to a low of 0.9 times. This indicates that their payment behavior can be highly volatile.The payment cycle is set at just 2 days, showcasing the frequency of payments they make for services rendered. BigTrolley Groceries demonstrates a low level of responsiveness, suggesting that they might be slow to provide feedback and communicate.Surprisingly, this client has no defined escalation matrix, which could imply that they don't have a formal process in place for handling escalated issues. This lack of escalation could pose both challenges and opportunities when interacting with them.",
  },
  {
    id: "CHRM",
    type: "Client",
    name: "Chrome Retail",
    imageURL: "/game_assets/EOTM/client5.png",
    industry: "Electronics",
    initialDailyRequirement: 5,
    paymentConsitencyfactor: {
      Dismal: 1.3,
      Moderate: 1.1,
      Pleased: 0.9,
      Delighted: 0.7,
    },
    paymentCycle: 5,
    responsiveness: "low",
    escalationMatrix: "unclear",
    summary:
      "Chrome Retail operates in the electronics industry, requiring 5 daily deliveries. Their payment consistency factor varies based on satisfaction levels, ranging from a high of 0.7 times the regular payment to a low of 1.3 times. This suggests that their payment behavior might be influenced by their overall satisfaction.The payment cycle is set at 5 days, indicating that they typically make payments within this timeframe. Chrome Retail exhibits a low level of responsiveness, which implies that they might not promptly provide feedback or communicate effectively.Interestingly, their escalation matrix is unclear, which could pose challenges in addressing any escalated issues that may arise. This lack of clarity might require additional efforts to ensure smooth interactions and problem resolution.",
  },
];

export { clients };
