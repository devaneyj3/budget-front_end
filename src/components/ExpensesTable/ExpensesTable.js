import Transactions from "../Transactions/Transactions";
import { Alert } from "reactstrap";
import "./ExpensesTable.scss";
const ExpensesTable = ({ transactions, expenseArr, totalExp }) => {
  return (
    <div className="container">
      <p className="exp">Total Expenses: ${totalExp.toLocaleString()}</p>
      <table>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Date</th>
        </tr>
        {transactions ? (
          expenseArr.map((transaction) => {
            return <Transactions {...transaction} />;
          })
        ) : (
          <Alert color="danger">There are no expenses</Alert>
        )}
      </table>
    </div>
  );
};

export default ExpensesTable;
