import { TextInput, type TextInputProps } from "@mantine/core";
import { Controller, type Control, type FieldValues, type Path, type RegisterOptions } from "react-hook-form";

interface TextFieldProps<T extends FieldValues> extends Omit<TextInputProps, 'name'> {
    name: Path<T>;
    control: Control<T>;
    rules?: Omit<RegisterOptions<T, Path<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    required?: boolean;
}

export const EmailInputFields = <T extends FieldValues>({
    name,
    control,
    label,
    rules,
    required = false,
    placeholder = 'Enter Email here',
    ...rest
}: TextFieldProps<T>) => {

    const baseRules: RegisterOptions<T, Path<T>> = {
        required: required ? `${label ?? 'Email'} is required` : false,
        pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Please enter a valid email address",
        },
    }

    return (
        <Controller
            name={name}
            control={control}
            rules={rules || baseRules}
            render={({ field, fieldState: { error } }) => (
                <TextInput
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
