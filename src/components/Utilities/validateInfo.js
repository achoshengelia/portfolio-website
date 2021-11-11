export default function validateInfo(values) {
	let errors = {};

	if (!values.name.trim()) {
		errors.name = 'Name is required';
	}
	// else if (!/^[A-Za-z]+/.test(values.name.trim())) {
	//   errors.name = 'Enter a valid name';
	// }
	// if (!values.email) {
	// 	errors.email = 'Email is required';
	// } else
	if (!values.email || !/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Enter a valid email address';
	}
	if (!values.message) {
		errors.message = 'Message is required';
	}
	return errors;
}
