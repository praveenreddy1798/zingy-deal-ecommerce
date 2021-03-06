import { v4 as uuid } from "uuid";
import { calculateDiscountedPrice } from "../utils";
import { getStrippedUuid } from "../utils";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: getStrippedUuid(uuid),
    title: "Men's Casual Cotton Tshirt",
    originalPrice: 500,
    discountPercentage: 30,
    discountedPrice: calculateDiscountedPrice(500, 30),
    quantity: 1,
    deliveryDuration: 1,
    deliveryCharge: 0,
    rating: 4.5,
    inStock: true,
    arrivalType: "Sale",
    categoryName: "men",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647802051/Men%20ecommerce/men-allen-solly-tshirt_tbqzcu.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Men's Hoodie",
    originalPrice: 400,
    discountPercentage: 10,
    discountedPrice: calculateDiscountedPrice(400, 10),
    quantity: 1,
    deliveryDuration: 1,
    deliveryCharge: 0,
    rating: 4.5,
    inStock: true,
    arrivalType: "New",
    categoryName: "men",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647802051/Men%20ecommerce/men-hoodie-slow-loris_v67apv.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Men's Sleevless Tshirt",
    originalPrice: 700,
    discountPercentage: 40,
    discountedPrice: calculateDiscountedPrice(700, 40),
    quantity: 1,
    deliveryDuration: 2,
    deliveryCharge: 30,
    rating: 4,
    inStock: true,
    arrivalType: "Sale",
    categoryName: "men",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647802051/Men%20ecommerce/men-sleevless-tshirt_ey5beb.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Men's Jersey Wear Tshirt",
    originalPrice: 500,
    discountPercentage: 10,
    discountedPrice: calculateDiscountedPrice(500, 10),
    quantity: 1,
    deliveryDuration: 2,
    deliveryCharge: 30,
    rating: 4,
    inStock: false,
    arrivalType: "New",
    categoryName: "men",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647802051/Men%20ecommerce/men-hrx-tshirt_nnvbt2.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Men's Checked Cotton Tshirt",
    originalPrice: 600,
    discountPercentage: 35,
    discountedPrice: calculateDiscountedPrice(600, 35),
    quantity: 1,
    deliveryDuration: 1,
    deliveryCharge: 0,
    rating: 3.5,
    inStock: true,
    arrivalType: "Sale",
    categoryName: "men",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647802051/Men%20ecommerce/men-checked-tshirt_pg9vvn.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Men's Classy Hoodie",
    originalPrice: 800,
    discountPercentage: 10,
    discountedPrice: calculateDiscountedPrice(800, 10),
    quantity: 1,
    deliveryDuration: 1,
    deliveryCharge: 0,
    rating: 5,
    inStock: false,
    arrivalType: "New",
    categoryName: "men",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647802052/Men%20ecommerce/men-full-hoodie_iqqbc1.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Men's Jersey Sleevless Tshirt",
    originalPrice: 800,
    discountPercentage: 10,
    discountedPrice: calculateDiscountedPrice(800, 10),
    quantity: 1,
    deliveryDuration: 2,
    deliveryCharge: 30,
    rating: 3,
    inStock: true,
    categoryName: "men",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647802052/Men%20ecommerce/men-sleevless-tshirt-polo_vrhnku.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Men's Printed Cotton Tshirt",
    originalPrice: 800,
    discountPercentage: 10,
    discountedPrice: calculateDiscountedPrice(800, 10),
    quantity: 1,
    deliveryDuration: 2,
    deliveryCharge: 30,
    rating: 1,
    inStock: false,
    categoryName: "men",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647802052/Men%20ecommerce/men-printed-round-neck-tshirt_d6nkia.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Men's Purple Cotton Tshirt",
    originalPrice: 600,
    discountPercentage: 10,
    discountedPrice: calculateDiscountedPrice(600, 10),
    quantity: 1,
    deliveryDuration: 3,
    deliveryCharge: 0,
    rating: 1,
    inStock: true,
    categoryName: "men",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647802052/Men%20ecommerce/men-purple-tshirt_mpaqdn.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Women's Printed Tshirt",
    originalPrice: 500,
    discountPercentage: 30,
    discountedPrice: calculateDiscountedPrice(500, 30),
    quantity: 1,
    deliveryDuration: 1,
    deliveryCharge: 0,
    rating: 4.5,
    inStock: true,
    arrivalType: "Sale",
    categoryName: "women",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647811959/Women%20ecommerce/women-printed-tshirts_mcc7td.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Women's Round Neck Cotton Tshirt",
    originalPrice: 400,
    discountPercentage: 10,
    discountedPrice: calculateDiscountedPrice(400, 10),
    quantity: 1,
    deliveryDuration: 1,
    deliveryCharge: 0,
    rating: 4.5,
    inStock: false,
    arrivalType: "New",
    categoryName: "women",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647811959/Women%20ecommerce/women-block-tshirt_nmmib1.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Women's Casual Cotton Tshirt",
    originalPrice: 700,
    discountPercentage: 40,
    discountedPrice: calculateDiscountedPrice(700, 40),
    quantity: 1,
    deliveryDuration: 2,
    deliveryCharge: 30,
    rating: 4,
    inStock: true,
    arrivalType: "Sale",
    categoryName: "women",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647811959/Women%20ecommerce/women-round-neck-tshirt_mrpkio.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Women's Full Sleeves Cotton Tshirt",
    originalPrice: 500,
    discountPercentage: 10,
    discountedPrice: calculateDiscountedPrice(500, 10),
    quantity: 1,
    deliveryDuration: 2,
    deliveryCharge: 30,
    rating: 4,
    inStock: true,
    arrivalType: "New",
    categoryName: "women",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647811958/Women%20ecommerce/women-full-sleeve-tshirt_gueqpq.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Women's Round Neck Full Sleeves Tshirt",
    originalPrice: 600,
    discountPercentage: 35,
    discountedPrice: calculateDiscountedPrice(600, 35),
    quantity: 1,
    deliveryDuration: 1,
    deliveryCharge: 0,
    rating: 3.5,
    inStock: true,
    arrivalType: "Sale",
    categoryName: "women",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647811958/Women%20ecommerce/women-round-neck-full-sleeve-tshirt_cqmn67.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Women's Jersey Wear Tshirt",
    originalPrice: 750,
    discountPercentage: 10,
    discountedPrice: calculateDiscountedPrice(750, 10),
    quantity: 1,
    deliveryDuration: 1,
    deliveryCharge: 0,
    rating: 5,
    inStock: false,
    arrivalType: "New",
    categoryName: "women",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647811958/Women%20ecommerce/women-nike-tshirt_j4pz03.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Women's Polo Tshirt",
    originalPrice: 800,
    discountPercentage: 10,
    discountedPrice: calculateDiscountedPrice(800, 10),
    quantity: 1,
    deliveryDuration: 2,
    deliveryCharge: 30,
    rating: 3,
    inStock: true,
    categoryName: "women",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647811958/Women%20ecommerce/women-polo-tshirt_szchbw.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Women's V Neck Cotton Tshirt",
    originalPrice: 650,
    discountPercentage: 10,
    discountedPrice: calculateDiscountedPrice(650, 10),
    quantity: 1,
    deliveryDuration: 2,
    deliveryCharge: 30,
    rating: 1,
    inStock: false,
    categoryName: "women",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647811959/Women%20ecommerce/women-v-neck-tshirt_afu6e6.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Women's Purple Cotton Tshirt",
    originalPrice: 600,
    discountPercentage: 5,
    discountedPrice: calculateDiscountedPrice(600, 5),
    quantity: 1,
    deliveryDuration: 3,
    deliveryCharge: 0,
    rating: 1,
    inStock: true,
    categoryName: "women",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647812446/Women%20ecommerce/women-purple-color-tshirt_gocrfp.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Girl's Printed Tshirt",
    originalPrice: 400,
    discountPercentage: 30,
    discountedPrice: calculateDiscountedPrice(400, 30),
    quantity: 1,
    deliveryDuration: 1,
    deliveryCharge: 0,
    rating: 4.5,
    inStock: true,
    arrivalType: "Sale",
    categoryName: "kids",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647813905/kids%20ecommerce/kids-girl-printed-tshirt_xeytlb.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Boy's Printed Tshirt",
    originalPrice: 400,
    discountPercentage: 10,
    discountedPrice: calculateDiscountedPrice(400, 10),
    quantity: 1,
    deliveryDuration: 1,
    deliveryCharge: 0,
    rating: 4.5,
    inStock: false,
    arrivalType: "New",
    categoryName: "kids",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647813905/kids%20ecommerce/kids-boy-tshirt_nlcynx.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Boy's Casual Black Tshirt",
    originalPrice: 350,
    discountPercentage: 40,
    discountedPrice: calculateDiscountedPrice(350, 40),
    quantity: 1,
    deliveryDuration: 2,
    deliveryCharge: 30,
    rating: 4,
    inStock: true,
    arrivalType: "Sale",
    categoryName: "kids",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647813905/kids%20ecommerce/kids-black-tshirt_al2n89.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Kids Printed Tshirt",
    originalPrice: 500,
    discountPercentage: 10,
    discountedPrice: calculateDiscountedPrice(500, 10),
    quantity: 1,
    deliveryDuration: 2,
    deliveryCharge: 30,
    rating: 4,
    inStock: true,
    arrivalType: "New",
    categoryName: "kids",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647813905/kids%20ecommerce/kids-red-tshirt_dardu3.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Kids Printed Tshirt",
    originalPrice: 400,
    discountPercentage: 35,
    discountedPrice: calculateDiscountedPrice(400, 35),
    quantity: 1,
    deliveryDuration: 1,
    deliveryCharge: 0,
    rating: 3.5,
    inStock: true,
    arrivalType: "Sale",
    categoryName: "kids",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647813904/kids%20ecommerce/kids-blue-tshirt_wxony7.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Kids Printed Tshirt",
    originalPrice: 450,
    discountPercentage: 10,
    discountedPrice: calculateDiscountedPrice(450, 10),
    quantity: 1,
    deliveryDuration: 1,
    deliveryCharge: 0,
    rating: 5,
    inStock: false,
    arrivalType: "New",
    categoryName: "kids",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647813904/kids%20ecommerce/kids-green-tshirt_pczrbw.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Girl's Red Printed Tshirt",
    originalPrice: 300,
    discountPercentage: 10,
    discountedPrice: calculateDiscountedPrice(300, 10),
    quantity: 1,
    deliveryDuration: 2,
    deliveryCharge: 30,
    rating: 2,
    inStock: true,
    categoryName: "kids",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647813905/kids%20ecommerce/kids-girl-red-printed-tshirt_b8lssc.webp",
  },
  {
    _id: getStrippedUuid(uuid),
    title: "Boy's Black Cotton Printed Tshirt",
    originalPrice: 450,
    discountPercentage: 10,
    discountedPrice: calculateDiscountedPrice(450, 10),
    quantity: 1,
    deliveryDuration: 2,
    deliveryCharge: 30,
    rating: 2,
    inStock: false,
    categoryName: "kids",
    image:
      "https://res.cloudinary.com/praveen-kumar/image/upload/v1647813904/kids%20ecommerce/kids-boy-black-printed-tshirt_vwdny9.webp",
  },
];
