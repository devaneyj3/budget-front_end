import { Table } from "reactstrap";
import "./Accounts.scss";
const Accounts = ({ transactions }) => {
  const MoneyInAccount = (account) => {
    const Inc = transactions
      .filter((item) => item.account === account && item.type === "inc")
      .reduce((acc, item) => acc + item.price, 0);
    const Exp = transactions
      .filter((item) => item.account === account && item.type === "exp")
      .reduce((acc, item) => acc + item.price, 0);
    return {
      account,
      total: Inc - Exp,
    };
  };

  const checking = MoneyInAccount("Checking");
  const savings = MoneyInAccount("Savings");
  const AccountsArr = [checking, savings];
  console.log(AccountsArr);

  return (
    <section className="accounts">
      <Table>
        <thead>
          <tr>
            <th>Account</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {AccountsArr.map((account) => {
            return (
              <tr>
                <td>{account.account}</td>
                <td className={account.total > 0 ? "green" : "red"}>
                  ${account.total.toLocaleString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </section>
  );
};

export default Accounts;
