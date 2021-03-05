import { GET_TRANSACTIONS } from "../actions/transactionActions";
const INITIAL_STATE = {
  transactions: [],
  msg: "",
};

const transactionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        transactions: action.payload,
      };
    default:
      return state;
  }
};

export default transactionReducer;
