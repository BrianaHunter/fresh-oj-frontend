import axiosInstance from "axios";
import { config } from "../config";

export const expressAPI = axiosInstance.create({
  baseURL: config.apiURL,
});

export const axios = axiosInstance;
// this is for any 3rd party API
