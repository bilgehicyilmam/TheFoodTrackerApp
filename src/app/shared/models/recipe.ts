export interface Recipe {
  id?: number;
  name: string;
  description: string;
  thumbUrl?: string;
  createdBy?: {
    name: string,
    thumb: string
  };
  nutrients?: { [key: string]: { amount: number } };
}
