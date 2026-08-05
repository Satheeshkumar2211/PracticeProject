import { Button, Paper, Stack, Text, Title } from "@mantine/core";
import { useForm, type SubmitHandler } from "react-hook-form";
import { CgPassword } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";
import { GiAges } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { EmailInputFields } from "../../../components/formFields/EmailInputFields";
import { NumberInputFields } from "../../../components/formFields/NumberInputFields";
import { PasswordFields } from "../../../components/formFields/PasswordFields";
import { SelectInputField } from "../../../components/formFields/SelectInputField";
import { TextInputFields } from "../../../components/formFields/TextInputFields";

const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'india', label: 'India' },
];

interface IFormInput {
    firstName: string;
    email: string;
    age: number | "";
    password: string;
    country: string | "";
}

export default function SampleRHF() {
    const { control, handleSubmit, formState: { isValid } } = useForm<IFormInput>({
        mode: "onChange",
        defaultValues: {
            firstName: '',
            email: "",
            age: "",
            password: "",
            country: ""
        },
    });

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log("Form Data Submitted:", data);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
            <Paper withBorder shadow="md" p="xl" radius="md" className="w-full max-w-md bg-white">
                <div className="text-center mb-6">
                    <Title order={2} className="text-gray-900 font-bold">
                        Create an Account
                    </Title>
                    <Text size="sm" c="dimmed" className="mt-1">
                        Mantine components controlled by React Hook Form
                    </Text>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack gap="md">
                        <TextInputFields
                            name="firstName"
                            control={control}
                            label="First Name"
                            placeholder="Enter your First Name"
                            withAsterisk
                            leftSection={<FaUser size={13} />}
                        />

                        <EmailInputFields
                            name="email"
                            control={control}
                            label="Email"
                            placeholder="Enter your Email"
                            withAsterisk
                            required={false}
                            leftSection={<MdEmail />}

                        />

                        <PasswordFields
                            name="password"
                            control={control}
                            label="Password"
                            placeholder="Enter your password"
                            leftSection={<CgPassword />}
                        />

                        <NumberInputFields
                            name="age"
                            control={control}
                            label="Age"
                            placeholder="Enter your password"
                            withAsterisk
                            required={false}
                            leftSection={<GiAges />}
                        />

                        <SelectInputField
                            name="country"
                            control={control}
                            label="Select your country"
                            placeholder="Type to search..."
                            data={countryOptions}
                            leftSection={<FaFlag />}
                        />

                        <Button disabled={!isValid} type="submit" fullWidth mt="xl" className="bg-indigo-600 hover:bg-indigo-700 transition-colors">
                            Sign Up
                        </Button>
                    </Stack>
                </form>
            </Paper>
        </div>
    );
}
