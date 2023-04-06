import {useEffect, useState} from "react";
import {fetchData} from "../utils/fetchUtils";

export function useFetch<T,K>(url: string){
	const [response, setResponse] = useState<T | undefined>(undefined);
	const [data, setData] = useState<K | undefined>(undefined);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		fetchData(url, setData, setResponse, setLoading);
	}, [url, setData, setLoading]);

	const reFetch = () => {
		fetchData(url, setData, setResponse, setLoading);
	};

	const newFetch = async (newUrl: string, concat?: boolean) => {
		const response = await fetchData(newUrl, undefined, setResponse, setLoading);
		if (concat && data && Array.isArray(data)) {
			setData(data.concat(response.results) as K);
		} else {
			setData(response.results);
		}
	};

	return {
		loading,
		data,
		response,
		reFetch,
		newFetch
	};
}