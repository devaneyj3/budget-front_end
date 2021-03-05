import { connect } from "react-redux";
import { Alert } from "reactstrap";
import moment from "moment";
import "./Transactions.scss";

const Transactions = ({ id, price, description, name, category, created }) => {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{description}</td>
        <td className="price">${price.toLocaleString()}</td>
        <td>{category}</td>
        <td>{moment(created).format("MMMM do YYYY")}</td>
      </tr>
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
