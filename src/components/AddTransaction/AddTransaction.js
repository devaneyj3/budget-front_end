import { Formik, Field } from "formik";
import { addTransaction } from "../../redux/actions/transactionActions";
import { connect } from "react-redux";
const AddTransaction = ({ addTransaction }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        price: "",
        type: "",
        category: "",
        date: "",
      }}
      onSubmit={(values) => {
        addTransaction(values);
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Field as="select" name="type">
            <option value="inc">Inc</option>
            <option value="exp">Exp</option>
          </Field>
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            placeholder="Name"
            name="name"
          />
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.description}
            placeholder="Description"
            name="description"
          />
          {props.errors.description && (
            <div id="feedback">{props.errors.description}</div>
          )}
          <input
            type="number"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.price}
            placeholder="3.00"
            name="price"
          />
          {props.errors.price && <div id="feedback">{props.errors.price}</div>}
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.category}
            name="category"
            placeholder="Category"
          />
          {props.errors.category && (
            <div id="feedback">{props.errors.category}</div>
          )}
          <input
            type="date"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.amount}
            name="date"
          />
          {props.errors.date && <div id="feedback">{props.errors.date}</div>}
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default connect(null, { addTransaction })(AddTransaction);
