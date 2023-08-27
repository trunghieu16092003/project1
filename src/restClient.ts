import axios from "axios";

const axiosIns = axios.create({
  baseURL: "http://localhost:4444/api",
});

interface IRestClient {
  url: string;
  params?: any;
  method?: "get" | "post" | "patch" | "put" | "delete";
}

const restClient = (config: IRestClient) =>
  axiosIns({
    ...config,
  })
    .then((res) => res.data)
    .catch((err) => {
      alert(err);
    });

export default restClient;