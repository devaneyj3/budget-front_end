import React, { useState, useEffect } from "react";
import Transactions from "../Transactions/Transactions";
import "./LatestTransactions.scss";
import { Alert, Table, Form, FormGroup, Input, Col, Row } from "reactstrap";
const LatestTrasactions = ({ transactions, account }) => {
  const categoriesSet = [
    ...new Set(transactions.map((transaction) => transaction.category)),
  ];

  const [input, setInput] = useState({
    category: "",
  });
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const filteredTransactions = transactions.filter((transaction) => {
      if (input.category) {
        return transaction.category === input.category;
      }
      return transaction.id;
    });
    console.log(filteredTransactions);
    setFilteredList(filteredTransactions);
  }, [transactions, input.account, input.category]);

  const changeHandleCategory = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <Form>
        <Row form>
          <Col>
            <FormGroup>
              <Input
                type="select"
                name="category"
                value={input.category}
                onChange={(e) => changeHandleCategory(e)}
              >
                <option></option>
                {categoriesSet
                  ? categoriesSet.map((category) => {
                      return <option value={category}>{category}</option>;
                    })
                  : null}
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </Form>
      {input.category && (
        <div className="filtered-term">
          <span>x {input.category}</span>
        </div>
      )}
      <Table hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Account</th>
            <th>Price</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions ? (
            filteredList
              .filter((transaction) => {
                if (account) {
                  return transaction.account === account;
                }
                return transaction.id;
              })
              .map((transaction) => {
                return <Transactions key={transaction.id} {...transaction} />;
              })
          ) : (
            <Alert color="danger">There are no transactions</Alert>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default LatestTrasactions;
