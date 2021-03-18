import { useEffect } from "react";
import { connect } from "react-redux";
import { Alert } from "reactstrap";
import { getTransactions } from "../redux/actions/transactionActions";
import "./app.scss";
import AddTransaction from "../components/AddTransaction/AddTransaction";
import LatestTrasactions from "../components/LatestTrasactions/LatestTrasactions";
import Accounts from "../components/Accounts/Accounts";

const App = ({ transactions, getTransactions, msg }) => {
  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <>
      {msg ? <Alert color="success">{msg}</Alert> : null}
      <div className="flex-container">
        <section className="addTransaction">
          <h3>Add Transaction</h3>
          <AddTransaction />
        </section>
        <section className="transactions">
          <h3>Latest Transactions</h3>
          <LatestTrasactions transactions={transactions} />
        </section>
        <section className="accounts">
          <h3>Accounts</h3>
          <Accounts transactions={transactions} />
        </section>
      </div>
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
