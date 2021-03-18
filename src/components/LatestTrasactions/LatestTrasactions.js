import Transactions from "../Transactions/Transactions";
import { Alert, Table } from "reactstrap";
const LatestTrasactions = ({ transactions }) => {
  return (
    <div className="container">
      <Table hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Account</th>
            <th>Price</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions ? (
            transactions.map((transaction) => {
              return <Transactions {...transaction} />;
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
