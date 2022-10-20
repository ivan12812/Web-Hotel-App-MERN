import { BASE_URL } from "./Helper";

const getAllCheckout = async () => {
	try {
		const response = await fetch(`${BASE_URL}/checkout`, {
			headers: {
				Authorization: localStorage.getItem("TOKEN"),
			},
		});
		const responseJson = await response.json();

		return responseJson;
	} catch (err) {
		alert(err);
	}
};

const createCheckout = async (data) => {
	try {
		const response = await fetch(`${BASE_URL}/checkout`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: localStorage.getItem("TOKEN"),
			},
			body: JSON.stringify(data),
		});
		const responseJson = await response.json();

		return responseJson;
	} catch (err) {
		alert(err);
	}
};

export { getAllCheckout, createCheckout };
