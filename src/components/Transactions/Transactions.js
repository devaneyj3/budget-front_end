import { connect } from "react-redux";
import moment from "moment";
import { deleteTransaction } from "../../redux/actions/transactionActions";
import "./Transactions.scss";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "reactstrap";

const Transactions = ({
  id,
  price,
  description,
  name,
  category,
  created,
  type,
  deleteTransaction,
}) => {
  const editItem = (transaction) => {
    console.log("editing, ", transaction);
  };
  const deleteItem = (id) => {
    deleteTransaction(id);
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td className={`price ${type === "inc" ? "inc" : "exp"}`}>
        ${price.toLocaleString()}
      </td>
      <td>{category}</td>
      <td>{moment(created).format("MMMM do YYYY")}</td>

      <td>
        <FontAwesomeIcon
          className="icon"
          icon={faEdit}
          onClick={() => editItem(name)}
        />
      </td>
      <td>
        <FontAwesomeIcon
          className="icon"
          icon={faTrash}
          onClick={() => deleteItem(id)}
        />
      </td>
    </tr>
  );
};

const mapStateToProps = (state) => {
  const { transactions } = state.transactionReducer;
  return {
    transactions: transactions,
  };
};

export default connect(mapStateToProps, { deleteTransaction })(Transactions);
