import { connect } from "react-redux";
import { Alert } from "reactstrap";
import moment from "moment";
import "./Transactions.scss";

const Transactions = ({
  id,
  price,
  description,
  name,
  category,
  created,
  updated,
}) => {
  return (
    <>
      <section key={id} className="transaction">
        <p>{name}</p>
        <p>{description}</p>
        <p className="price">{price.toLocaleString()}</p>
        <p>{category}</p>
        <p>{moment(created).format("MMMM do YYYY")}</p>
        {updated ? <p>{moment(updated).format("MMMM do YYYY")}</p> : null}
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  const { transactions } = state.transactionReducer;
  return {
    transactions: transactions,
  };
};

export default connect(mapStateToProps, {})(Transactions);
