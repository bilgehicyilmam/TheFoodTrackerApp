export interface Recipe {
  portionsize: number;
  id?: number;
  name: string;
  description: string;
  prepTime: number;
  cookTime: number;
  directions: string;
  thumbUrl?: string;
  createdBy?: {
    id: number;
    name: string;
    thumb: string;
  };
  ingredients: string[];
  nutrients?: { [key: string]: { amount: number } };
  tags?: string[];
}
