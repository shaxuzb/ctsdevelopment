import axios from "axios";

export default axios.create({
    baseURL: import.meta.env.REACT_APP_RES_BASE,
    headers:{
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2ltcmFuYmFjLnV6L2FwaS9sb2dpbiIsImlhdCI6MTcyNjAzMzk4NywiZXhwIjoxNzI4NjI1OTg3LCJuYmYiOjE3MjYwMzM5ODcsImp0aSI6IjNRWjI5bFA5cWhrR0txVk8iLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.xAsX9e3a9HWMGRNvMBvAMkNiNnYVbP2vhdVdAWISCKQ"
    }
})

