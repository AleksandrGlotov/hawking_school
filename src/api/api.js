import axios from "axios";
import NewsType from "../redux/newsSlice";
import MockAdapter from "axios-mock-adapter";
import { mockNews } from "./mockData";

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet("/news").reply(200, mockNews);

export const newsAPI = {
  getNews() {
    return axios.get("/news").then((res) => {
          return res.data;
        });
    },
};
