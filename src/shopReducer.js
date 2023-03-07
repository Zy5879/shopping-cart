export const initialState = {
  total: 0,
  products: [],
};

function shopReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      console.log("ADD_TO_CART", payload);
      return {
        ...state,
        products: payload.products,
      };
    case "UPDATE_QTY":
      console.log("UPDATE_QTY", payload);
      const newArray = [...state.products];
      return {
        ...state,
        products: newArray,
      };
    case "REMOVE_FROM_CART":
      console.log("REMOVE_FROM_CART", payload);
      return {
        ...state,
        products: payload.products,
      };
    case "UPDATE_PRICE":
      console.log("UPDATE_PRICE", payload);
      return {
        ...state,
        total: payload.total,
      };
    case "UPDATE_QUANTITY":
      console.log("UPDATE_QUANTITY", payload);
      return {
        ...state,
        qty: payload.products.qty,
      };
    default:
      throw new Error(`No case for type ${type} found in shopReducer`);
  }
}

export default shopReducer;
