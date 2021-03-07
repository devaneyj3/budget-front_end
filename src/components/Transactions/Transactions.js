import { useState } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import moment from "moment";
import "./Transactions.scss";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Transactions = ({ id, price, description, name, category, created }) => {
  const [showOptions, setShowOptions] = useState(false);
  const editTransaction = (transaction) => {
    console.log("editing, ", transaction);
  };
  const deleteTransaction = (transaction) => {
    console.log("deleting, ", transaction);
  };
  return (
    <>
      <tr
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
      >
        <td>{name}</td>
        <td>{description}</td>
        <td className="price">${price.toLocaleString()}</td>
        <td>{category}</td>
        <td>{moment(created).format("MMMM do YYYY")}</td>
        {showOptions ? (
          <>
            <FontAwesomeIcon
              icon={faEdit}
              onClick={() => editTransaction(name)}
            />
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => deleteTransaction(name)}
            />
          </>
        ) : null}
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
