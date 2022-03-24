import { useProducts } from "../context/products";

export const ProductsFilterSection = () => {
  const { productsState, productsDispatch } = useProducts();
  const {
    selectedCategoryFilters,
    sortByPrice,
    selectedRating,
    selectedOtherFilters,
  } = productsState;
  return (
    <div class="sidebar filter-sidebar pd-md">
      <div class="flex-between">
        <h3 class="flex">Filter</h3>
        <button>
          <h3
            onClick={() => productsDispatch({ type: "CLEAR_PRODUCTS_FILTER" })}
            class="underline regular-dark"
          >
            Clear
          </h3>
        </button>
      </div>
      <div class="flex-vertical row-gap-p5 mg-t-md">
        <h3 class="flex">Price</h3>
        <div class="flex align-center gap-1">
          <input
            id="low_to_high"
            type="radio"
            name="sortByPrice"
            checked={sortByPrice === "low_to_high"}
            onChange={(event) =>
              productsDispatch({
                type: "SORT_PRODUCTS_BY_PRICE",
                payload: event.target.id,
              })
            }
          />
          <label htmlFor="price_low_to_high">Price: Low to High</label>
        </div>
        <div class="flex align-center gap-1">
          <input
            id="high_to_low"
            type="radio"
            name="sortByPrice"
            checked={sortByPrice === "high_to_low"}
            onChange={(event) =>
              productsDispatch({
                type: "SORT_PRODUCTS_BY_PRICE",
                payload: event.target.id,
              })
            }
          />
          <label htmlFor="price_high_to_low">Price: High to Low</label>
        </div>
      </div>
      <div class="mg-t-md">
        <h3 class="flex">Rating</h3>
        <div class="slider-container">
          <datalist class="price-datalist flex-between" id="tickmarks">
            <option value="1" label="1"></option>
            <option value="2" label="2"></option>
            <option value="3" label="3"></option>
            <option value="4" label="4"></option>
            <option value="5" label="5"></option>
          </datalist>
          <input
            class="slider"
            type="range"
            step="1"
            min="1"
            max="5"
            list="tickmarks"
            id="rating"
            name="rating"
            value={selectedRating}
            onChange={(event) => {
              productsDispatch({
                type: "FILTER_PRODUCTS_BY_RATING",
                payload: event.target.value,
              });
            }}
          />
        </div>
      </div>
      <div class="flex-vertical row-gap-p5 mg-t-md">
        <h3 class="flex">Category</h3>
        <div class="flex align-center gap-1">
          <input
            id="men"
            type="checkbox"
            name="category"
            checked={selectedCategoryFilters?.includes("men")}
            onChange={(event) =>
              productsDispatch({
                type: "FILTER_PRODUCTS_BY_CATEGORY",
                payload: event.target.id,
              })
            }
          />
          <label htmlFor="men">Men</label>
        </div>
        <div class="flex align-center gap-1">
          <input
            id="women"
            type="checkbox"
            name="category"
            checked={selectedCategoryFilters?.includes("women")}
            onChange={(event) =>
              productsDispatch({
                type: "FILTER_PRODUCTS_BY_CATEGORY",
                payload: event.target.id,
              })
            }
          />
          <label htmlFor="women">Women</label>
        </div>
        <div class="flex align-center gap-1">
          <input
            id="kids"
            type="checkbox"
            name="category"
            checked={selectedCategoryFilters.includes("kids")}
            onChange={(event) =>
              productsDispatch({
                type: "FILTER_PRODUCTS_BY_CATEGORY",
                payload: event.target.id,
              })
            }
          />
          <label htmlFor="kids">Kids</label>
        </div>
      </div>
      <div class="flex-vertical row-gap-p5 mg-t-md">
        <h3 class="flex">Others</h3>
        <div class="flex align-center gap-1">
          <input
            id="inStock"
            type="checkbox"
            name="other-filters"
            checked={selectedOtherFilters.includes("inStock")}
            onChange={(event) =>
              productsDispatch({
                type: "FILTER_PRODUCTS_BY_OTHER_FILTERS",
                payload: event.target.id,
              })
            }
          />
          <label htmlFor="inStock">In stock</label>
        </div>
        <div class="flex align-center gap-1">
          <input
            id="freeDelivery"
            type="checkbox"
            name="other-filters"
            checked={selectedOtherFilters.includes("freeDelivery")}
            onChange={(event) =>
              productsDispatch({
                type: "FILTER_PRODUCTS_BY_OTHER_FILTERS",
                payload: event.target.id,
              })
            }
          />
          <label htmlFor="freeDelivery">Free Delivery</label>
        </div>
        <div class="flex align-center gap-1">
          <input
            id="new"
            type="checkbox"
            name="other-filters"
            checked={selectedOtherFilters.includes("new")}
            onChange={(event) =>
              productsDispatch({
                type: "FILTER_PRODUCTS_BY_OTHER_FILTERS",
                payload: event.target.id,
              })
            }
          />
          <label htmlFor="new">New Arrival</label>
        </div>
        <div class="flex align-center gap-1">
          <input
            id="sale"
            type="checkbox"
            name="other-filters"
            checked={selectedOtherFilters.includes("sale")}
            onChange={(event) =>
              productsDispatch({
                type: "FILTER_PRODUCTS_BY_OTHER_FILTERS",
                payload: event.target.id,
              })
            }
          />
          <label htmlFor="sale">Sale</label>
        </div>
      </div>
    </div>
  );
};
