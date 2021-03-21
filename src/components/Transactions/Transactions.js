import React, { useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { deleteTransaction } from "../../redux/actions/transactionActions";
import "./Transactions.scss";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const Transactions = ({
  id,
  price,
  description,
  name,
  category,
  created,
  account,
  type,
  deleteTransaction,
}) => {
  const editItem = (transaction) => {
    console.log("editing, ", transaction);
    toggle();
  };
  const deleteItem = (id) => {
    deleteTransaction(id);
    toggle();
  };

  const [modal, setModal] = useState(false);
  const [blur, setBlur] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      {blur === false ? (
        <tr onMouseEnter={() => setBlur(true)}>
          <td>{name}</td>
          <td>{account}</td>
          <td className={`price ${type === "inc" ? "inc" : "exp"}`}>
            ${price.toLocaleString()}
          </td>
          <td>{category}</td>
          <td>{moment(created).format("MMMM do YYYY")}</td>
        </tr>
      ) : (
        <tr onMouseLeave={() => setBlur(false)}>
          <td colSpan="5">
            <section className="btn-container">
              <Button color="info" onClick={toggle}>
                <FontAwesomeIcon className="icon" icon={faEdit} />
                Edit
              </Button>
              <Button color="danger" onClick={toggle}>
                <FontAwesomeIcon className="icon" icon={faTrash} />
                Delete
              </Button>
              <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} style={{ textAlign: "center" }}>
                  Are you sure you want to delete?
                </ModalHeader>
                <ModalFooter>
                  <Button color="primary" onClick={toggle}>
                    No
                  </Button>{" "}
                  <Button color="success" onClick={() => deleteItem(id)}>
                    Yes
                  </Button>
                </ModalFooter>
              </Modal>
            </section>
          </td>
        </tr>
      )}
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
