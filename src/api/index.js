import axios from "axios";
import EndpointFactory from "axios-endpoints";

const axiosInstance = axios.create({
  baseURL: "",
  responseType: "json"
});

const Endpoint = EndpointFactory(axiosInstance);

export default {}