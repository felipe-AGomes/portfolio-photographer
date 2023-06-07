import { Inputs } from "@/@types";

export const emailSubmit = async (event: Inputs) => {
	const query = `mailto:carolinepecharka@gmail.com?subject=${encodeURIComponent(
		'Portfolio Fotografia',
	)}&body=${encodeURIComponent(event.message)}`;

	window.location.href = query;
};
