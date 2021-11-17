import React, { useState, useEffect } from 'react';
import validateInfo from './validateInfo';

const useForm = () => {
	const [values, setValues] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [errors, setErrors] = useState({});
	const handleChange = (e) => {
		const { name, value } = e.target;

		setValues({
			...values,
			[name]: value,
		});
		if (errors.name || errors.email || errors.message) {
			setErrors(validateInfo(values));
		}
	};

	return { handleChange, values, errors, setErrors };
};
export default useForm;
