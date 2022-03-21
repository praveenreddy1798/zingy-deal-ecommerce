const sortProductsFromHighToLow = (products) =>
  products.sort(
    (productA, productB) => productB.discountedPrice - productA.discountedPrice
  );

const sortProductsFromLowToHigh = (products) =>
  products.sort(
    (productA, productB) => productA.discountedPrice - productB.discountedPrice
  );

const sortProductsByAppliedFilter = (products, appliedFilter) => {
  if (appliedFilter === "low_to_high") {
    return sortProductsFromLowToHigh(products);
  }
  return sortProductsFromHighToLow(products);
};

const filterProductsByCategoryApplied = (products, selectedFilters) =>
  products.filter((product) => selectedFilters.includes(product.categoryName));

const filterProductsByOtherFiltersApplied = (products, selectedFilters) =>
  products.filter((product) => {
    return (
      selectedFilters.includes(product?.arrivalType?.toLowerCase()) ||
      (selectedFilters.includes("inStock") && product.inStock) ||
      (selectedFilters.includes("freeDelivery") && product.deliveryCharge === 0)
    );
  });

const filterProductsByAppliedFilters = ({
  state,
  categoryFilters,
  otherFilters,
  rating,
}) => {
  const {
    originalData,
    selectedOtherFilters,
    selectedCategoryFilters,
    sortByPrice,
    selectedRating,
  } = state;
  const productsToFilter = [...originalData];
  let products = productsToFilter;
  const categoryFiltersList = categoryFilters
    ? categoryFilters
    : selectedCategoryFilters;
  const otherFiltersList = otherFilters ? otherFilters : selectedOtherFilters;
  const ratingValue = rating ? rating : selectedRating;

  if (categoryFiltersList.length) {
    products = filterProductsByCategoryApplied(products, categoryFiltersList);
  }

  if (otherFiltersList.length) {
    products = filterProductsByOtherFiltersApplied(products, otherFiltersList);
  }

  products = getProductsWithSortByPriceAndRatingApplied(
    products,
    sortByPrice,
    ratingValue
  );

  return products;
};

export const getProductsWithSortByPriceAndRatingApplied = (
  products,
  sortByPrice,
  selectedRating
) => {
  const sortedProducts = sortProductsByAppliedFilter(products, sortByPrice);
  return filterByRatings(sortedProducts, selectedRating);
};

const filterByRatings = (products, currentAppliedFilterRating) =>
  products.filter((product) => product.rating <= currentAppliedFilterRating);

export const sortProductsByPrice = (state, action) => {
  const productsToSort = [...state.products];
  const currentAppliedFilter = action.payload;
  const sortedProductsByPrice = sortProductsByAppliedFilter(
    productsToSort,
    currentAppliedFilter
  );
  return {
    ...state,
    products: sortedProductsByPrice,
    sortByPrice: currentAppliedFilter,
  };
};

export const filterProductsByRating = (state, action) => {
  const currentAppliedFilterRating = action.payload;
  const products = filterProductsByAppliedFilters({
    state,
    rating: currentAppliedFilterRating,
  });

  return {
    ...state,
    products,
    selectedRating: currentAppliedFilterRating,
  };
};

export const filterProductsByCategory = (state, action) => {
  const currentAppliedFilter = action.payload;
  const selectedCategoryFilters = [...state.selectedCategoryFilters];
  const indexOfAppliedFilter =
    selectedCategoryFilters.indexOf(currentAppliedFilter);
  if (indexOfAppliedFilter >= 0) {
    selectedCategoryFilters.splice(indexOfAppliedFilter, 1);
  } else {
    selectedCategoryFilters.push(currentAppliedFilter);
  }
  const products = filterProductsByAppliedFilters({
    state,
    categoryFilters: selectedCategoryFilters,
  });
  return {
    ...state,
    products,
    selectedCategoryFilters,
  };
};

export const filterProductsByOtherFilters = (state, action) => {
  const currentAppliedFilter = action.payload;
  const selectedOtherFilters = [...state.selectedOtherFilters];
  const indexOfAppliedFilter =
    selectedOtherFilters.indexOf(currentAppliedFilter);
  if (indexOfAppliedFilter >= 0) {
    selectedOtherFilters.splice(indexOfAppliedFilter, 1);
  } else {
    selectedOtherFilters.push(currentAppliedFilter);
  }
  const products = filterProductsByAppliedFilters({
    state,
    otherFilters: selectedOtherFilters,
  });
  return {
    ...state,
    products,
    selectedOtherFilters,
  };
};

export const searchByProductName = (state, action) => {
  const searchValue = action.payload.toLowerCase();
  let products;
  if (searchValue) {
    products = [...state.products].filter((product) =>
      product.title.toLowerCase().includes(searchValue)
    );
  } else {
    products = filterProductsByAppliedFilters({ state });
  }

  return {
    ...state,
    products,
  };
};

export const clearProductsFilter = (state) => {
  const products = getProductsWithSortByPriceAndRatingApplied(
    state.originalData,
    "low_to_high",
    5
  );
  return {
    ...state,
    products,
    selectedRating: 5,
    selectedCategoryFilters: [],
    selectedOtherFilters: [],
    sortByPrice: "low_to_high",
  };
};
