import { useEffect } from "react";
import { connect } from "react-redux";
import { Alert } from "reactstrap";
import { getTransactions } from "../redux/actions/transactionActions";
import "./app.scss";

const App = ({ transactions, getTransactions }) => {
  useEffect(() => {
    getTransactions();
  });
  return (
    <>
      {transactions
        ? transactions.map((transaction) => {
            const {
              id,
              price,
              description,
              name,
              category,
              created,
              updated,
            } = transaction;
            return (
              <section key={id} className="transaction">
                <h1>{name}</h1>
                <h1>{description}</h1>
                <h1>{price}</h1>
                <h1>{category}</h1>
                <h1>{created}</h1>
                <h1>{updated}</h1>
              </section>
            );
          })
        : null}
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
