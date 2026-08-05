import { Select, type SelectProps } from "@mantine/core";
import { Controller, type Control, type FieldValues, type Path, type RegisterOptions } from "react-hook-form";

interface FormSelectProps<T extends FieldValues> extends Omit<SelectProps, 'name'> {
    control: Control<T>;
    name: Path<T>;
    required?: boolean;
    rules?: Omit<RegisterOptions<T, Path<T>>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
}

export const SelectInputField = <T extends FieldValues>({
    control,
    name,
    required = false,
    rules,
    data,
    onChange: parentOnChange,
    ...rest
}: FormSelectProps<T>) => {

    const baseRules: RegisterOptions<T, Path<T>> = {
        required: required ? "This field is required" : false,
    };

    return (
        <Controller
            name={name}
            control={control}
            rules={rules || baseRules}
            render={({ field: { value, onChange, ...fieldProps }, fieldState: { error } }) => (
                <Select
                    {...fieldProps}
                    data={data}
                    value={value || null}
                    onChange={(val, o) => {
                        onChange(val);

                        if (parentOnChange) {
                            parentOnChange(val, o);
                        }
                    }}
                    error={error?.message}
                    withAsterisk={required}
                    searchable
                    clearable
                    nothingFoundMessage="No options found" // Shown when search fails
                    selectFirstOptionOnChange
                    {...rest}
                />
            )}
        />
    );
};
