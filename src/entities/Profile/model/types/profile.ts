import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

export interface Profile {
    userId: number,
    id: number;
    first: string;
    lastname: string;
    age: number;
    currency: Currency;
    country: Country;
    city: string;
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    rendonly: boolean;
}
