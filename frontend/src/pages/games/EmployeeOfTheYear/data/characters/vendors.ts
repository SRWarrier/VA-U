interface VehicleProps {
  count: number;
  quality: "good" | "average" | "bad";
}

interface VehicleCountProps {
  "Tata Ace": VehicleProps;
  "Mahindra Bolero": VehicleProps;
  "Tata 407": VehicleProps;
  "Piaggio Ape": VehicleProps;
  "Maruti Eeco": VehicleProps;
  "Ashok Leyland Dost": VehicleProps;
}

interface VendorProps {
  name: string;
  vehicleCount: Partial<VehicleCountProps>;
  paymentDelayResistencefactor: number;
  paymentCycle: number;
  responsiveness: "high" | "moderate" | "low";
  documentationQuality: "high" | "medium" | "low";
  summary: string;
  imageURL: string;
}

const vendors: VendorProps[] = [
  {
    name: "Mayilvahanan",
    vehicleCount: {
      "Tata Ace": {
        count: 2,
        quality: "good",
      },
      "Mahindra Bolero": {
        count: 1,
        quality: "good",
      },
    },
    paymentDelayResistencefactor: 1,
    paymentCycle: 2,
    responsiveness: "high",
    documentationQuality: "high",
    summary:
      "Vendor Mayilvahanan is equipped with 2 Tata Ace vehicles and 1 Bolero, all in good quality. With a payment delay resistance factor of 1, Mayilvahanan prefers timely payments. The payment cycle is set at 2 days, ensuring quick financial transactions. Their high responsiveness and excellent documentation quality make them a reliable choice.",
    imageURL: "/game_assets/EOTM/Vendor1.png",
  },
  {
    name: "Raj Logistics",
    vehicleCount: {
      "Tata Ace": {
        count: 3,
        quality: "good",
      },
      "Mahindra Bolero": {
        count: 2,
        quality: "average",
      },
    },
    paymentDelayResistencefactor: 0.8,
    paymentCycle: 3,
    responsiveness: "moderate",
    documentationQuality: "high",
    summary:
      "Vendor Raj Logistics is equipped with 3 Tata Ace vehicles and 2 Mahindra Bolero vehicles, maintaining good and average quality respectively. With a payment delay resistance factor of 0.8, Raj Logistics prefers timely payments. The payment cycle is set at 3 days, ensuring smooth financial transactions. Their moderate responsiveness and excellent documentation quality contribute to efficient logistics operations.",
    imageURL: "/game_assets/EOTM/Vendor1.png",
  },
  {
    name: "Swift Transports",
    vehicleCount: {
      "Tata 407": {
        count: 4,
        quality: "good",
      },
      "Ashok Leyland Dost": {
        count: 1,
        quality: "average",
      },
    },
    paymentDelayResistencefactor: 0.6,
    paymentCycle: 4,
    responsiveness: "high",
    documentationQuality: "medium",
    summary:
      "Vendor Swift Transports is equipped with 4 Tata 407 vehicles and 1 Ashok Leyland Dost vehicle, maintaining excellent and good quality respectively. With a payment delay resistance factor of 0.6, Swift Transports prefers timely payments. The payment cycle is set at 4 days, ensuring efficient financial transactions. Their high responsiveness and moderate documentation quality contribute to reliable logistics services.",
    imageURL: "/game_assets/EOTM/Vendor1.png",
  },
  {
    name: "Golden Wheels",
    vehicleCount: {
      "Maruti Eeco": {
        count: 5,
        quality: "bad",
      },
    },
    paymentDelayResistencefactor: 1.2,
    paymentCycle: 5,
    responsiveness: "low",
    documentationQuality: "low",
    summary:
      "Vendor Golden Wheels specializes in 5 Maruti Eeco vehicles, all in working quality. With a payment delay resistance factor of 1.2, Golden Wheels emphasizes timely payments. The payment cycle is set at 5 days, providing flexibility in financial transactions. Their low responsiveness and documentation quality suggest an economical choice for logistics needs.",
    imageURL: "/game_assets/EOTM/Vendor1.png",
  },
];

export { vendors };
