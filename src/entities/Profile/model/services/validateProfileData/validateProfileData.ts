import { Profile, ValidateProfileError } from "../../types/profile";

export const validateProfileData = (profile?: Profile) => {
	const errors: ValidateProfileError[] = []; 
	
	if (!profile) {
		return [ValidateProfileError.NO_DATA];
	}

	const { first, lastname, age, city } = profile;

	if (!first || !lastname) {
		errors.push(ValidateProfileError.INCORRECT_USER_DATA);
	}

	if (!age || !Number.isInteger(age)) {
		errors.push(ValidateProfileError.INCORRECT_AGE);
	}
    
	if (!first || first?.length === 0) {
		errors.push(ValidateProfileError.INCORRECT_FIRST);
	}
    
	if (!lastname || lastname?.length === 0) {
		errors.push(ValidateProfileError.INCORRECT_FIRST);
	}

	if (!city || city?.length === 0) {
		errors.push(ValidateProfileError.INCORRECT_CITY);
	}

	return errors;
};