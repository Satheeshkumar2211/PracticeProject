import { Button, NumberInput, PasswordInput, TextInput } from "@mantine/core";
import { isInRange, isNotEmpty, useForm } from "@mantine/form";
import { useState } from "react";
import { ErrorMsg } from "../../../config/ErrorConfig";

const MantineForm = () => {
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const errorMst = ErrorMsg.form;

    const form = useForm({
        mode: 'uncontrolled',
        validateInputOnChange: true,
        validate: {
            email: (value: string) => (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ? null : errorMst.email),
            name: isNotEmpty(errorMst.mandatory),
            phoneNumber: isInRange({ max : 10})
        },
        onValuesChange: () => {
            setIsFormValid(form.isValid());
        }
    });

    const handleSubmit = (d: any) => {
        console.log(d);
    };

    const fieldsMapping = [
        { key: 'name', label: 'Name', Placeholder: 'Enter Name', required: true },
        { key: 'email', label: 'Email', Placeholder: 'Enter Email', required: true },
        { key: 'age', label: 'Age', Placeholder: 'Enter Age', type: 'Number' },
        { key: 'password', label: 'Password', Placeholder: 'Enter Password', type: 'Password' },
        { key: 'phoneNumber', label: 'Phone Number', Placeholder: 'Enter Phone Number', type: 'Number' },
    ];

    return (
        <div className="h-full flex flex-col items-center justify-center">
            <div className="text-center font-semibold py-2 text-2xl">Mantine UseForm</div>
            <div className="min-w-xl bg-slate-100 rounded-xl">
                <div className="px-3 py-7">
                    <form onSubmit={form.onSubmit(handleSubmit)}>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2 mx-4">
                                {fieldsMapping.map((f, _i) => {

                                    if (f.type === 'Number') {
                                        return (
                                            <NumberInput
                                                key={form.key(f?.key)}
                                                required={f?.required ?? false}
                                                label={f?.label}
                                                placeholder={f?.Placeholder ?? null}
                                                allowNegative={false}
                                                hideControls
                                            />
                                        )
                                    } else if (f.type === 'Password') {
                                        return (
                                            <PasswordInput
                                                {...f}
                                                key={form.key(f?.key)}
                                            />
                                        )
                                    }

                                    return (
                                        <TextInput
                                            {...f}
                                            {...form.getInputProps(f?.key)}
                                        />
                                    )
                                })}
                            </div>
                            <div className="flex justify-center">
                                <Button type="submit" disabled={!isFormValid} >Submit</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MantineForm
