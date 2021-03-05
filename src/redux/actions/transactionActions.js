import axiosWithAuth from "../../utils/axiosWithAuth";
export const GET_TRANSACTIONS = "GET_TRANSACTIONS";

export const getTransactions = () => async (dispatch) => {
  try {
    const response = await axiosWithAuth().get("/transactions");
    dispatch({ type: GET_TRANSACTIONS, payload: response.data });
  } catch (err) {
    dispatch({ type: GET_TRANSACTIONS, message: err.response.data.message });
  }
};
