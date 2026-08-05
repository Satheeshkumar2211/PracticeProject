import { Outlet } from "react-router-dom";
import PageNotFound from "../../common/PageNotFound";
import MantineForm from "../forms/mantineForm/MantineForm";
import RHF from "../forms/reactHooksFrom/RHF";
import MantineGrid from "../grid/MantineGrid";
import SampleRHF from "../forms/reactHooksFrom/SampleRHF";



export const AppRoutes = [
    {
        path: "*",
        name: "Not Found Page",
        element: <PageNotFound />,
        state: "home"
    },
    {
        path: "",
        element: <Outlet />,
        name: "Project",
        children: [
            {
                path: 'RHF',
                element: <RHF />,
            },
            {
                path: 'm-form',
                element: <MantineForm />,
            },
            {
                path: 'm-table',
                element: <MantineGrid />,
            },
            {
                path: 'sampleRHF',
                element: <SampleRHF />,
            }
        ],
    }
];
