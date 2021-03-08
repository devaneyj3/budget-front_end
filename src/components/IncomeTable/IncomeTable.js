import Transactions from "../Transactions/Transactions";
import { Alert } from "reactstrap";
import "./IncomeTable.scss";
const IncomeTable = ({ incomeArr, totalInc }) => {
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
        {incomeArr ? (
          incomeArr.map((transaction) => {
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
