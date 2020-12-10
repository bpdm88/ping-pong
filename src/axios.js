import axios from "axios";

export default axios.create({
    baseURL: "https://restful.training/api/ping-pong",
    headers: {
        Accept: "application/json",
        Authorization: "Bearer 18|CQKiWEPWESgha0mjgx4PHO8CrJRzvH26i0rCldCL",
    },
});
