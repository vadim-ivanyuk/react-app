export const getAuthorsNamesById = (courseAuthorsId = [], authors = []) => {
	return authors.reduce((acc, author) => {
		if (courseAuthorsId.includes(author.id)) {
			acc.push(author.name);
		}

		return acc;
	}, []);
};
