export const loadToken = () => {
	try {
		const serializedToken = localStorage.getItem('token');
		if (serializedToken === null) {
			return undefined;
		}
		return JSON.parse(serializedToken);
	} catch (err) {
		return undefined;
	}
};

export const removeToken = () => {
	try {
		localStorage.removeItem('token');
	} catch (e) {
		throw new Error(e);
	}
};

export const saveToken = token => {
	try {
		const serializedToken = JSON.stringify(token);
		localStorage.setItem('token', serializedToken);
	} catch (e) {
		throw new Error(e);
	}
};
