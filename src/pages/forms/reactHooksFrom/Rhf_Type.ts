interface patternProps {
    value?: RegExp;
    message?: string;
}

export interface formInputProps {
    name: string;
    label: string;
    placeholder: string;
    rules?: {
        maxLength?: number;
        minLength?: number;
        required?: string;
        pattern?: patternProps;
    }
}