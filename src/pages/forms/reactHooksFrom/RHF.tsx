

import { Button, SimpleGrid, Stack, TextInput } from '@mantine/core';
import { Controller, useForm } from 'react-hook-form';
import { ErrorMsg } from '../../../config/ErrorConfig';
import type { formInputProps } from './Rhf_Type';
import SampleRHF from './SampleRHF';

const errorMsg = ErrorMsg.form;
const FORM_FIELDS: formInputProps[] = [
    { name: 'firstName', label: 'First Name', placeholder: 'John', rules: { required: errorMsg.mandatory } },
    { name: 'lastName', label: 'Last Name', placeholder: 'Doe' },
    {
        name: 'email', label: 'Email', placeholder: 'john@example.com', rules: {
            required: errorMsg.mandatory,
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: errorMsg.email
            }
        }
    },
    {
        name: 'phone', label: 'Phone Number', placeholder: '123-456-7890', rules: {
            minLength: 5,
            pattern: {
                message: errorMsg.email
            }
        }
    },
    { name: 'address', label: 'Address', placeholder: '123 Main St', rules: { required: errorMsg.mandatory } },
    { name: 'city', label: 'City', placeholder: 'New York' },
    { name: 'zipCode', label: 'Zip Code', placeholder: '10001' },
    { name: 'company', label: 'Company', placeholder: 'Acme Corp' },
    { name: 'jobTitle', label: 'Job Title', placeholder: 'Developer' },
    { name: 'notes', label: 'Notes', placeholder: 'Additional info' },
];

const RHF = () => {

    const { control, handleSubmit, formState: { isValid } } = useForm<formInputProps>({ mode: 'onChange' });
    const onSubmit = (data: formInputProps) => console.log(data);

    return (
        <div className="flex w-full">
            <div className="flex items-center justify-center w-[50%]">
                <div className="bg-gray-50 rounded-2xl shadow-xl p-3 min-w-3xl">
                    <div className="text-xl font-semibold text-blue-700 text-center my-3">React Hooks Form</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack className='mx-3' >
                            <div className="flex flex-col gap-5">
                                <SimpleGrid cols={{ base: 2 }} spacing="lg">
                                    {FORM_FIELDS.map((val: any, _inx: number) => {
                                        return (<>
                                            <Controller
                                                key={val.name}
                                                name={val.name}
                                                control={control}
                                                rules={val?.rules}
                                                render={({ field: meshProps, fieldState }) => (
                                                    <TextInput
                                                        {...meshProps}
                                                        label={val.label}
                                                        placeholder={val.placeholder}
                                                        error={fieldState.error?.message}
                                                        withAsterisk={!!val.rules?.required}
                                                    />
                                                )}
                                            />
                                        </>)
                                    })
                                    }
                                </SimpleGrid>

                                <div className="flex justify-center">
                                    <Button disabled={!isValid} w={100} type="submit">Submit</Button>
                                </div>
                            </div>
                        </Stack>
                    </form>
                </div>
            </div>
            <div className="w-[50%]">
                <SampleRHF />
            </div>
        </div>

    );
}

export default RHF
