import { connect } from "react-redux";
import "./Money.scss";
const Money = ({ transactions }) => {
  return <div className="money">$0</div>;
};

export default connect(null, {})(Money);
