import { useEffect } from "react";
import { connect } from "react-redux";
import { Alert } from "reactstrap";
import { getTransactions } from "../redux/actions/transactionActions";
import "./app.scss";
import AddTransaction from "../components/AddTransaction/AddTransaction";
import IncomeTable from "../components/IncomeTable/IncomeTable";
import ExpensesTable from "../components/ExpensesTable/ExpensesTable";
import Money from "../components/Money/Money";

const App = ({ transactions, getTransactions, msg }) => {
  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className="app-container">
      {msg ? <Alert color="success">{msg}</Alert> : null}
      <AddTransaction />
      <Money />
      <section className="tables">
        <ExpensesTable transactions={transactions} />
        <IncomeTable transactions={transactions} />
      </section>
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
