

export async function fetchData<T,K>(url: string, setData?: (s: K) => void, setResponse?: (s: T) => void, setLoading?: (b: boolean) => void) {
	if (setLoading) {
		setLoading(true);
	}
	const response = await fetch(url);
	const json = await response.json();
	if (setData) {
		setData(json?.results);
	}
	if (setResponse) {
		setResponse(json);
	}
	if (setLoading) {
		setLoading(false);
	}
	return json;
}