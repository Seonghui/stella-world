import { useState, useEffect } from 'react';

const useForm = (callback, validation) => {
	const [values, setValues] = useState({});
	const [formErrors, setFormErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		if (Object.keys(formErrors).length === 0 && isSubmitting) {
			callback();
		}
		// eslint-disable-next-line
	}, [formErrors]);

	const handleSubmit = event => {
		if (event) event.preventDefault();
		setIsSubmitting(true);
		setFormErrors(validation(values));
	};

	const handleChange = event => {
		event.persist();
		setValues(values => ({
			...values,
			[event.target.name]: event.target.value,
		}));
	};

	const handleResetForm = () => {
		setValues({});
		setFormErrors({});
		setIsSubmitting(false);
	};

	return {
		handleChange,
		handleSubmit,
		values,
		formErrors,
		handleResetForm,
	};
};

export default useForm;
