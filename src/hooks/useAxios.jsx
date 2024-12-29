import { useContext, useEffect } from "react";
import axios from "axios";
const useAxios = () => {
const axiosPrivate = axios.create({
	baseURL: import.meta.env.REACT_APP_RES_BASE,
	headers:{
		"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2ltcmFuYmFjLnV6L2FwaS9sb2dpbiIsImlhdCI6MTcyNjAzMzk4NywiZXhwIjoxNzI4NjI1OTg3LCJuYmYiOjE3MjYwMzM5ODcsImp0aSI6IjNRWjI5bFA5cWhrR0txVk8iLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.xAsX9e3a9HWMGRNvMBvAMkNiNnYVbP2vhdVdAWISCKQ"
	}
})
const user = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
		const requestIntercept = axiosPrivate.interceptors.request.use(
			(config) => {
				if (!config.headers["Authorization"]) {
					config.headers["Authorization"] = `Bearer ${user?.access_token}`
				}
				return config
			},
			(err) => Promise.reject(err)
		)

		const responseIntercept = axiosPrivate.interceptors.response.use(
			(response) => response,
			async (error) => {
				if (error?.response?.status === 401) {
					console.log("logout");
					
				}
				if (error?.code === "ERR_NETWORK") {
					// sendNotification({
					// 	msg: t("common.alerts.error.noConnection"),
					// 	variant: "error"
					// })
				}
				return Promise.reject(error)
			}
		)

		return () => {
			axiosPrivate.interceptors.request.eject(requestIntercept)
			axiosPrivate.interceptors.response.eject(responseIntercept)
		}

	}, [user])

	return axiosPrivate
}

export default useAxios