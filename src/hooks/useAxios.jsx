import { useContext, useEffect } from "react";
import axios from "axios";
const useAxios = () => {
const axiosPrivate = axios.create({
	baseURL: import.meta.env.REACT_APP_RES_BASE
})

const user = JSON.parse(localStorage.getItem("user"))
console.log(
	axiosPrivate
);

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