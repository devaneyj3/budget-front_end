import { useEffect } from "react";
import { connect } from "react-redux";
import { getTransactions } from "../redux/actions/transactionActions";
import "./app.scss";
import AddTransaction from "../components/AddTransaction/AddTransaction";
import ExpensesTable from "../components/ExpensesTable/ExpensesTable";

const App = ({ transactions, getTransactions }) => {
  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <>
      <AddTransaction />
      <ExpensesTable transactions={transactions} />
    </>
  );
};

const mapStateToProps = (state) => {
  const { transactions } = state.transactionReducer;
  return {
    transactions: transactions,
  };
};

export default connect(mapStateToProps, { getTransactions })(App);
