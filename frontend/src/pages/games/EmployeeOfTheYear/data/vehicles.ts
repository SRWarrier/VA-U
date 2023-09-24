import { VehicleProps } from "./EOTM_types/ObjectDataTypes";

export interface VehiclesProps {
  "Tata Ace": VehicleProps;
  Bolero: VehicleProps;
  "Tata 407": VehicleProps;
  Ape: VehicleProps;
  Eeco: VehicleProps;
  Dost: VehicleProps;
}

const Vehicles: VehiclesProps = {
  "Tata Ace": {
    industryMostServed: ["Food", "Groceries", "Textiles"],
    breakdownFrequency: {
      good: 0.1,
      average: 0.4,
      bad: 0.6,
    },
  },
  Bolero: {
    industryMostServed: ["Food", "Groceries", "Furniture"],
    breakdownFrequency: {
      good: 0.1,
      average: 0.5,
      bad: 0.7,
    },
  },
  Ape: {
    industryMostServed: ["Textiles", "Groceries", "Food"],
    breakdownFrequency: {
      good: 0.1,
      average: 0.5,
      bad: 0.7,
    },
  },
  Eeco: {
    industryMostServed: ["Groceries", "Food"],
    breakdownFrequency: {
      good: 0.1,
      average: 0.5,
      bad: 0.7,
    },
  },
  "Tata 407": {
    industryMostServed: ["Furniture", "Electronics"],
    breakdownFrequency: {
      good: 0.1,
      average: 0.5,
      bad: 0.7,
    },
  },
  Dost: {
    industryMostServed: ["Furniture", "Groceries"],
    breakdownFrequency: {
      good: 0.1,
      average: 0.5,
      bad: 0.7,
    },
  },
};

export { Vehicles };
