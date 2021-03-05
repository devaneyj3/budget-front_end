import { useEffect } from "react";
import { connect } from "react-redux";
import { Alert } from "reactstrap";
import { getTransactions } from "../redux/actions/transactionActions";
import "./app.scss";
import Transactions from "../components/Transactions/Transactions";

const App = ({ transactions, getTransactions }) => {
  useEffect(() => {
    getTransactions();
  }, []);

  const totalExp = transactions.reduce(
    (acc, transaction) => acc + transaction.price,
    0
  );
  return (
    <>
      <div className="container">
        <p className="exp">${totalExp.toLocaleString()}</p>
        <table>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
          {transactions
            ? transactions.map((transaction) => {
                return <Transactions {...transaction} />;
              })
            : null}
        </table>
      </div>
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
