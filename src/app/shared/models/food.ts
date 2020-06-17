export interface Food {
  fdcId: number;
  dataType: string;
  description: string;
  foodCode: string;
  foodNutrients: [{
    nutrientId: number;
    nutrientNumber: number;
    nutrientName: string;
    value: number;
    unitName: string;
    derivationCode: string;
    derivationDescription: string;
  }];
  foodPortions?: [{
    portionDescription: string;
    gramWeight: number;
  }];
  portionText: string;
  times: number;
  amount: number;
}
