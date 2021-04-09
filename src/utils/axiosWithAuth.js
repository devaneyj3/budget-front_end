import axios from "axios";

const axiosWithAuth = () => {
  let environment =
    process.env.NODE_ENV === "production"
      ? "https://budget-app122.herokuapp.com/api/"
      : "http://localhost:3000/api/";

  return axios.create({
    baseURL: environment,
  });
};

export default axiosWithAuth;
