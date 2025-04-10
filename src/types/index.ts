export interface SizeChart {
  US: number[];
  EU: number[];
}

export interface ShoeModel {
  name: string;
  description: string;
  category: string;
  price?: number;
  releaseYear?: number;
}

export interface BrandData {
  name: string;
  subBrands?: string[];
  sizeChart: SizeChart;
  models: ShoeModel[];
}

export interface ShoeData {
  brands: Record<string, BrandData>;
}

export interface ConvertedSize {
  us: number;
  eu: number;
}

export type BrandSelection = {
  brand: string;
  subBrand?: string;
};