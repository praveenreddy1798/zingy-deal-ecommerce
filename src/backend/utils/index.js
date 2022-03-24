export const calculateDiscountedPrice = (originalPrice, discountPercentage) =>
  originalPrice - (discountPercentage / 100) * originalPrice;

export const getStrippedUuid = (uuid) => uuid().replaceAll("-", "");
