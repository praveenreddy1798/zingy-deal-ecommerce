import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "men",
    description: "Clothing for Men",
  },
  {
    _id: uuid(),
    categoryName: "women",
    description: "Clothing for women",
  },
  {
    _id: uuid(),
    categoryName: "kids",
    description: "Clothing for kids",
  },
];
