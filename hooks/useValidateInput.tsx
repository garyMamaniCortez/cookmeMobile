import { InputType } from "@/interfaces/ThemedInputProps";

const useValidateInput = (value: string, type: InputType): boolean => {
    switch (type) {
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value);
        case 'password':
            return value.length >= 6;
        case 'phone':
            const phoneRegex = /^[0-9]{10}$/;
            return phoneRegex.test(value);
        default:
            return true;
    }
};

export default useValidateInput;
