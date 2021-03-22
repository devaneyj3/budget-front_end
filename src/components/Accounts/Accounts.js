import { Table } from "reactstrap";
import "./Accounts.scss";
const Accounts = ({ transactions, setAccount }) => {
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
  const total = AccountsArr.reduce((acc, curr) => acc + curr.total, 0);

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
              <tr key={account.account}>
                <td
                  className="account"
                  onClick={() => setAccount(account.account)}
                >
                  {account.account}
                </td>
                <td className={account.total > 0 ? "green" : "red"}>
                  ${account.total.toLocaleString()}
                </td>
              </tr>
            );
          })}
          <tr>
            <td className="account" onClick={() => setAccount("")}>
              Total
            </td>
            <td>${total.toLocaleString()}</td>
          </tr>
        </tbody>
      </Table>
    </section>
  );
};

export default Accounts;
