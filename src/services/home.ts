import axios from "axios";
import { BASE_URL } from "../constants/apiConfig";
import { apiRoutes } from "../constants/apiRoutes";

export const HomeService = {
  getTvShows() {
    return axios.get(BASE_URL + apiRoutes.schedule);
  },
  getShow(id: string | number) {
    return axios.get(BASE_URL + apiRoutes.shows(id));
  },
};
