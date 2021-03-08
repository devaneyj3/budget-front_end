import Transactions from "../Transactions/Transactions";
import { Alert } from "reactstrap";
import "./IncomeTable.scss";
const IncomeTable = ({ transactions, setTotalInc }) => {
  const incomArr = transactions.filter(
    (transaction) => transaction.type === "inc"
  );
  const totalInc = incomArr.reduce(
    (acc, transaction) => acc + transaction.price,
    0
  );
  return (
    <div className="container">
      <p className="inc">Total Income: ${totalInc.toLocaleString()}</p>
      <table>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Date</th>
        </tr>
        {incomArr ? (
          incomArr.map((transaction) => {
            return <Transactions {...transaction} />;
          })
        ) : (
          <Alert color="danger">There are no expenses</Alert>
        )}
      </table>
    </div>
  );
};

export default IncomeTable;
