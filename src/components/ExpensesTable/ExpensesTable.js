import Transactions from "../Transactions/Transactions";
import { Alert } from "reactstrap";
const ExpensesTable = ({ transactions }) => {
  const expenseArr = transactions.filter(
    (transaction) => transaction.type === "exp"
  );
  const totalExp = expenseArr.reduce(
    (acc, transaction) => acc + transaction.price,
    0
  );
  return (
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
          ? expenseArr.map((transaction) => {
              return <Transactions {...transaction} />;
            })
          : null}
      </table>
    </div>
  );
};

export default ExpensesTable;
