import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
    
    const [selectedInx, setSelectedInx] = useState<Number>(0)
    const toNav = useNavigate();

    const pathMapping = [
        { id: 1, label: 'RHF', path: '/RHF', title: 'React Hooks Form' },
        { id: 2, label: 'M-Form', path: '/m-form', title: 'Mantine Form' },
        { id: 2, label: 'M-Table', path: '/m-table', title: 'Mantine Table' },
    ];

    const handleTapClick = (path: string, inx: number) => {
        toNav(path);
        setSelectedInx(inx)
    };

    return (
        <div className="flex justify-between items-center h-full w-full">
            <div className="">
            </div>
            <div className="flex gap-2  px-3">
                {pathMapping.map((v, i: number) => {
                    return (
                        <>
                            <div
                                key={i}
                                onClick={() => { handleTapClick(v?.path, i) }}
                                className={`rounded-lg text-sm font-semibold px-3 py-1 cursor-pointer transition-colors duration-300
                                ${selectedInx == i ? 'bg-blue-500 text-white' : 'text-gray-700 bg-white hover:text-blue-600 '}
                                `}>
                                {v?.label}
                            </div>
                        </>
                    )
                })
                }
            </div>
        </div>
    )
}

export default TopNav
