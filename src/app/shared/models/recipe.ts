export interface Recipe {
  id: string;
  name: string;
  description: string;
  thumbUrl: string;
  rating: number;
  numberOfComments: number;
  createdBy: { name: string, thumb: string };
  nutritionData: { [key: string]: string };
}
