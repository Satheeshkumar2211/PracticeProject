import { PasswordInput, type PasswordInputProps } from "@mantine/core";
import { Controller, type Control, type FieldValues, type Path, type RegisterOptions } from "react-hook-form";

interface PasswordProps<T extends FieldValues> extends Omit<PasswordInputProps, 'name'> {
    name: Path<T>;
    control: Control<T>;
    rules?: Omit<RegisterOptions<T, Path<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    required?: boolean
}

export const PasswordFields = <T extends FieldValues>({
    name,
    control,
    label,
    rules,
    required = false,
    placeholder = '*********',
    ...rest
}: PasswordProps<T>) => { 

    const baseRules: RegisterOptions<T, Path<T>> = {
        required: required ? `${label ?? 'Password'} is required` : false,
        minLength: { value: 8, message: `${label ?? 'Password'} must be at least 8 characters` },
        pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            message: "Include 1 uppercase letter, 1 lowercase letter, and 1 number",
        },
    };


    return (
        <Controller
            name={name}
            control={control}
            rules={rules || baseRules}
            render={({ field, fieldState: { error } }) => (
                <PasswordInput
                    {...field}
                    {...rest}
                    label={label}
                    placeholder={placeholder}
                    error={error?.message}
                    value={field.value ?? ''}
                    withAsterisk={required}
                />
            )}
        />
    )
}
