export const handleError = (error) => {
	alert(error.response.data.errors || error.response.data.result || error);
};
