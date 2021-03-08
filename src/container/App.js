import { useEffect, useState } from "react";
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

  const [totalInc, setTotalInc] = useState(0);
  const [totalExp, setTotalExp] = useState(0);

  return (
    <div className="app-container">
      {msg ? <Alert color="success">{msg}</Alert> : null}
      <AddTransaction />
      <Money transactions={transactions} />
      <section className="tables">
        <ExpensesTable transactions={transactions} setTotalExp={setTotalExp} />
        <IncomeTable transactions={transactions} setTotalInc={setTotalInc} />
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
