interface EmployeeProps {
  name: string;
  effectiveCommunication: "high" | "moderate" | "low";
  followupQuality: "high" | "moderate" | "low";
  clientEngagement: "high" | "moderate" | "low";
  vendorRetention: "high" | "moderate" | "low";
  morale: "high" | "moderate" | "low";
  summary: string;
  imageURL: string;
}

const employees: EmployeeProps[] = [
  {
    name: "Prakeet",
    effectiveCommunication: "high",
    followupQuality: "moderate",
    clientEngagement: "high",
    vendorRetention: "moderate",
    morale: "high",
    summary:
      "Prakeet is a dedicated team member with strong communication skills and a high level of client engagement. Their follow-up quality ensures that clients' needs are met, while their vendor retention skills contribute to a healthy vendor relationship. Prakeet's positive morale sets the tone for a motivated and proactive marketing approach.",
    imageURL: "/game_assets/EOTM/client2.png",
  },
  {
    name: "Mirrah",
    effectiveCommunication: "moderate",
    followupQuality: "high",
    clientEngagement: "moderate",
    vendorRetention: "high",
    morale: "moderate",
    summary:
      "Mirrah is a detail-oriented team member with excellent follow-up quality and effective communication skills. Her moderate client engagement ensures that client needs are met, and her ability to retain vendors strengthens the supply chain. Mirrah's balanced morale contributes to a harmonious work environment.",
    imageURL: "/game_assets/EOTM/employee2.png",
  },
  {
    name: "Ciran Cumar",
    effectiveCommunication: "moderate",
    followupQuality: "moderate",
    clientEngagement: "low",
    vendorRetention: "low",
    morale: "high",
    summary:
      "Ciran Cumar is a meticulous team member with moderate communication skills and a strong focus on details. Although his client engagement and vendor retention are lower, his commitment to accuracy and financial stability is unmatched. Ciran's high morale contributes to a positive and proactive team.",
    imageURL: "/game_assets/EOTM/client2.png",
  },
  {
    name: "Subah Shyam",
    effectiveCommunication: "high",
    followupQuality: "high",
    clientEngagement: "high",
    vendorRetention: "moderate",
    morale: "high",
    summary:
      "Subah Shyam is a charismatic team member with exceptional communication skills and a high level of client engagement. Her follow-up quality ensures that clients' needs are met, while her ability to maintain good vendor relationships contributes to a reliable supply chain. Subah's high morale drives her to exceed sales targets.",
    imageURL: "/game_assets/EOTM/employee1.png",
  },
];

export { employees };
