import { Industry, PriceRange } from "./EOTM_types/ObjectDataTypes";

const defaultPriceRanges: Record<Industry, PriceRange> = {
  Food: { low: 5000, mid: 15000, high: 25000, factor: 1.3 },
  Groceries: { low: 2500, mid: 12000, high: 20000, factor: 1.2 },
  Furniture: { low: 2500, mid: 10000, high: 20000, factor: 1 },
  Electronics: { low: 2000, mid: 8000, high: 18000, factor: 1 },
  Textiles: { low: 1500, mid: 5000, high: 10000, factor: 1 },
};

export { defaultPriceRanges };
