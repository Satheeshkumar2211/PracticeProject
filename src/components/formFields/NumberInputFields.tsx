import { TextInput, type TextInputProps } from "@mantine/core";
import { Controller, type Control, type FieldValues, type Path, type RegisterOptions } from "react-hook-form";

interface NumberFieldsProps<T extends FieldValues> extends Omit<TextInputProps, 'name'> {
    name: Path<T>;
    control: Control<T>;
    rules?: Omit<RegisterOptions<T, Path<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    required?: boolean;
}

export const NumberInputFields = <T extends FieldValues>({
    name,
    control,
    label,
    rules,
    required = false,
    placeholder = 'Enter Number here',
    ...rest
}: NumberFieldsProps<T>) => {

 
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
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
