import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Alert } from "reactstrap";
import { getTransactions } from "../redux/actions/transactionActions";
import "./app.scss";
import AddTransaction from "../components/AddTransaction/AddTransaction";
import LatestTrasactions from "../components/LatestTrasactions/LatestTrasactions";
import Money from "../components/Money/Money";

const App = ({ transactions, getTransactions, msg }) => {
  useEffect(() => {
    getTransactions();
  }, []);

  const incomeArr = transactions.filter(
    (transaction) => transaction.type === "inc"
  );
  const totalInc = incomeArr.reduce(
    (acc, transaction) => acc + transaction.price,
    0
  );
  const expenseArr = transactions.filter(
    (transaction) => transaction.type === "exp"
  );
  const totalExp = expenseArr.reduce(
    (acc, transaction) => acc + transaction.price,
    0
  );

  return (
    <div className="app-container">
      {msg ? <Alert color="success">{msg}</Alert> : null}
      <AddTransaction />
      <Money
        transactions={transactions}
        totalInc={totalInc}
        totalExp={totalExp}
      />
      <LatestTrasactions transactions={transactions} />
    </div>
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
