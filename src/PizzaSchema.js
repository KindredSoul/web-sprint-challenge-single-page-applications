import * as yup from "yup";

export default yup.object().shape({
	username: yup
		.string()
		.required("Please enter a name.")
		.min(2, "Name must be at least two (2) characters in length"),
	pizza_size: yup
		.string()
		.oneOf(["Large", "Medium", "Small"], "Please select a size."),
	topping1: yup.boolean().optional(),
	topping2: yup.boolean().optional(),
	topping3: yup.boolean().optional(),
	topping4: yup.boolean().optional(),
	details: yup
		.string()
		.optional()
		.max(100, "No more than 100 characters may be entered"),
});
