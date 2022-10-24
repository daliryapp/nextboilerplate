import axios from "axios";
import { BASE_URL } from "_core/configs/config";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
