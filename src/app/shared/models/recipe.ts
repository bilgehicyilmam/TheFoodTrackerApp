export interface Recipe {
  portionSize: number;
  id?: number;
  name: string;
  description: string;
  prepTime: number;
  cookTime: number;
  directions: string;
  thumbUrl?: string;
  createdBy?: {
    id: string;
    name: string;
    thumb: string;
  };
  ingredients: any;
  nutrients?: { [key: string]: { amount: number } };
  tags?: string[];
  userId?: string;
}
