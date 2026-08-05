import { TextInput, type TextInputProps } from "@mantine/core";
import { Controller, type Control, type FieldValues, type Path, type RegisterOptions } from "react-hook-form";

interface TextFieldProps<T extends FieldValues> extends Omit<TextInputProps, 'name'> {
    name: Path<T>;
    control: Control<T>;
    rules?: Omit<RegisterOptions<T, Path<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    required?: boolean;
}

export const TextInputFields = <T extends FieldValues>({
    name,
    control,
    label,
    rules,
    required = false,
    placeholder = 'Enter Text here',
    ...rest
}: TextFieldProps<T>) => {

    const baseRules: RegisterOptions<T, Path<T>> = {
        required: `${label ?? ''} is required`, 
    }

    return (
        <Controller
            name={name}
            control={control}
            rules={rules || baseRules}
            render={({ field, fieldState: { error } }) => (
                <TextInput
                    {...field}
                    label={label}
                    placeholder={placeholder}
                    error={error?.message}
                    value={field.value ?? ''}
                    withAsterisk={required}
                    {...rest}
                />
            )}
        />
    )
}
