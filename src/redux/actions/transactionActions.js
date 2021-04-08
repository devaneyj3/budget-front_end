import axiosWithAuth from "../../utils/axiosWithAuth";
export const GET_TRANSACTIONS = "GET_TRANSACTIONS";
export const POST_TRANSACTION = "POST_TRANSACTION";
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";
export const EDIT_TRANSACTION = "EDIT_TRANSACTION";
export const getTransactions = () => async (dispatch) => {
  try {
    const response = await axiosWithAuth().get("/transactions");
    dispatch({ type: GET_TRANSACTIONS, payload: response.data });
  } catch (err) {
    dispatch({ type: GET_TRANSACTIONS, message: err.response.data.message });
  }
};
export const deleteTransaction = (id) => async (dispatch) => {
  try {
    const response = await axiosWithAuth().delete(`/transactions/${id}`);
    dispatch({
      type: DELETE_TRANSACTION,
      payload: response.data.data,
      msg: response.data.message,
    });
    console.log(response.data.message);
  } catch (err) {
    dispatch({ type: DELETE_TRANSACTION, msg: err.response.data.message });
  }
};
export const editTransaction = (id, data) => async (dispatch) => {
  try {
    console.log(id);
    const response = await axiosWithAuth().put(`/transactions/${id}`, data);
    console.log(response.data);
    dispatch({
      type: EDIT_TRANSACTION,
      payload: response.data.data,
      msg: response.data.message,
    });
    console.log(response.data.message);
  } catch (err) {
    dispatch({ type: EDIT_TRANSACTION, msg: err.response.data.message });
  }
};
export const addTransaction = (data) => async (dispatch) => {
  try {
    console.log("addTransaction actions line 44", data);
    const response = await axiosWithAuth().post("/transactions", data);
    console.log("addTransaction", response.data);
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
