import { connect } from "react-redux";
import "./Money.scss";
const Money = ({ totalExp, totalInc }) => {
  let total = totalInc - totalExp;
  return (
    <div className={`money ${totalExp > totalInc ? "exp" : "inc"}`}>
      ${total.toLocaleString()}
    </div>
  );
};

export default connect(null, {})(Money);