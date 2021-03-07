import {
  GET_TRANSACTIONS,
  POST_TRANSACTION,
} from "../actions/transactionActions";
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
    case POST_TRANSACTION:
      return {
        transactions: action.payload,
        msg: action.msg,
      };
    default:
      return state;
  }
};

export default transactionReducer;
