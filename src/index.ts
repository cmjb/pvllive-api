import { Api, gspListResult, pesListResult } from "./api";

const api = new Api();

const gspList = api.fetchGSPList();

const pesList = api.fetchPESList();

pesList.then((result: pesListResult) => {
  console.log(result);
});