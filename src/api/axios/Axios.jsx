import axios from "axios";

export default axios.create({
    baseURL: import.meta.env.REACT_APP_RES_BASE,
})

