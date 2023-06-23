import axios from "axios";
// import { useParams } from "react-router-dom";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5005",
  // withCredentials: true // => you might need this option if using cookies and sessions
});

const errorHandler = (err) => {
  throw err;
};

const getItems = () => {
  return api
    .get("/api/items")
    .then((res) => res.data)
    .catch(errorHandler);
};

const uploadImage = (file) => {
  return api
    .post("/api/upload", file)
    .then((res) => res.data)
    .catch(errorHandler);
};

const createItem = (newItem) => {
  return api
    .post("/api/items", newItem)
    .then((res) => res.data)
    .catch(errorHandler);
};

const exportDefault =  {
  getItems,
  uploadImage,
  createItem
};

export default exportDefault;
