import axios from "axios";

const axiosWithAuth = () => {
  let environment = "http://localhost:3000/api/";

  return axios.create({
    baseURL: environment,
  });
};

export default axiosWithAuth;
