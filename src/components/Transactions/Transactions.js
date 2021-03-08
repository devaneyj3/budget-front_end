import { useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { deleteTransaction } from "../../redux/actions/transactionActions";
import "./Transactions.scss";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Transactions = ({
  id,
  price,
  description,
  name,
  category,
  created,
  deleteTransaction,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const editItem = (transaction) => {
    console.log("editing, ", transaction);
  };
  const deleteItem = (id) => {
    deleteTransaction(id);
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
            <FontAwesomeIcon icon={faEdit} onClick={() => editItem(name)} />
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteItem(id)} />
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

export default connect(mapStateToProps, { deleteTransaction })(Transactions);
