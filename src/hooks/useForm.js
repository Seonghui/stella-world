import { useState } from 'react';

const useForm = (callback, validation, initialValue = {}) => {
	const [values, setValues] = useState(initialValue);

	const handleChange = e => {
		const { name, value } = e.target;
		setValues(values => ({
			...values,
			[name]: value,
		}));
	};

	const setInitialValue = value => {
		setValues(value);
	};

	const handleResetForm = () => {
		setValues(initialValue);
	};

	return {
		handleChange,
		values,
		handleResetForm,
		setInitialValue,
	};
};

export default useForm;
