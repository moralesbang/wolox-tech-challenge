import axios from "axios";

const API_URL = "http://localhost:3001";
const plainAxiosInstance = axios.create({
  baseURL: API_URL
});

export function addUser(user) {
  plainAxiosInstance
    .post("/sign_in", user)
    .then(response => (localStorage.userData = JSON.stringify(response.data)))
    .catch(error => console.log("Something went wrong", error));
}
