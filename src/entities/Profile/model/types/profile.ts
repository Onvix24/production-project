import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";

export interface Profile {
    id?: string;
    first?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileSchema {
    id?: string;
    data?: Profile;
    formData?: Profile;
    isLoading: boolean;
    error?: string;
    rendonly: boolean;
    validateErrors?: ValidateProfileError[];
}

export enum ValidateProfileError {
	INCORRECT_FIRST = "INCORRECT_FIRST",
	INCORRECT_LASTNAME = "INCORRECT_LASTNAME",
	INCORRECT_AGE = "INCORRECT_AGE",
	INCORRECT_USER_DATA = "INCORRECT_USER_DATA",
	INCORRECT_CITY = "INCORRECT_CITY",
	NO_DATA = "NO_DATA",
	SERVER_ERROR = "SERVER_ERROR",
}