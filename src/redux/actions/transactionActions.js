import axiosWithAuth from "../../utils/axiosWithAuth";
export const GET_TRANSACTIONS = "GET_TRANSACTIONS";
export const POST_TRANSACTION = "POST_TRANSACTION";

export const getTransactions = () => async (dispatch) => {
  try {
    const response = await axiosWithAuth().get("/transactions");
    dispatch({ type: GET_TRANSACTIONS, payload: response.data });
  } catch (err) {
    dispatch({ type: GET_TRANSACTIONS, message: err.response.data.message });
  }
};
export const addTransaction = (data) => async (dispatch) => {
  try {
    const response = await axiosWithAuth().post("/transactions", data);
    dispatch({
      type: POST_TRANSACTION,
      payload: response.data.data,
      msg: response.data.message,
    });
    console.log(response.data.message);
  } catch (err) {
    dispatch({ type: POST_TRANSACTION, msg: err.response.data.message });
  }
};
