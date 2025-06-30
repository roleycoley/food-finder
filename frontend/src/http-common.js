import axios from "axios"

export default axios.create({
    // url of backend server (in server.js)
    baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api/v1/restaurants",
    headers: {
        "Content-type": "application/json"
    }
});