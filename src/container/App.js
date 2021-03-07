import { useEffect } from "react";
import { connect } from "react-redux";
import { Alert } from "reactstrap";
import { getTransactions } from "../redux/actions/transactionActions";
import "./app.scss";
import AddTransaction from "../components/AddTransaction/AddTransaction";
import ExpensesTable from "../components/ExpensesTable/ExpensesTable";

const App = ({ transactions, getTransactions, msg }) => {
  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <>
      {msg ? <Alert color="success">{msg}</Alert> : null}
      <AddTransaction />
      <ExpensesTable transactions={transactions} />
    </>
  );
};

const mapStateToProps = (state) => {
  const { transactions, msg } = state.transactionReducer;
  return {
    transactions: transactions,
    msg: msg,
  };
};

export default connect(mapStateToProps, { getTransactions })(App);
