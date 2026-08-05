import { DataTable } from "mantine-datatable";
import { useEffect, useState } from "react";

const PAGE_SIZE = 10;
const data = [
    { "name": "Alice Johnson", "role": "Software Engineer" },
    { "name": "Bob Smith", "role": "Product Manager" },
    { "name": "Charlie Davis", "role": "UX Designer" },
    { "name": "Diana Prince", "role": "Data Scientist" },
    { "name": "Evan Wright", "role": "DevOps Engineer" },
    { "name": "Fiona Gallagher", "role": "Marketing Specialist" },
    { "name": "George Clooney", "role": "Legal Counsel" },
    { "name": "Hannah Abbott", "role": "HR Manager" },
    { "name": "Ian Malcolm", "role": "Research Scientist" },
    { "name": "Julia Roberts", "role": "Financial Analyst" },
    { "name": "Kevin Bacon", "role": "Sales Director" },
    { "name": "Laura Croft", "role": "Security Analyst" },
    { "name": "Michael Scott", "role": "Regional Manager" },
    { "name": "Nina Simone", "role": "Content Strategist" },
    { "name": "Oscar Isaac", "role": "Solutions Architect" },
    { "name": "Penelope Cruz", "role": "Operations Lead" },
    { "name": "Quentin Tarantino", "role": "Creative Director" },
    { "name": "Rachel Green", "role": "Customer Success" },
    { "name": "Steve Rogers", "role": "QA Engineer" },
    { "name": "Tina Fey", "role": "Copywriter" },
    { "name": "Uma Thurman", "role": "Business Analyst" }
]


const MantineGrid = () => {

    const [page, setPage] = useState(1);
    const [records, setRecords] = useState(data.slice(0, PAGE_SIZE));

    useEffect(() => {
        const from = (page - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE;
        setRecords(data.slice(from, to));
    }, [page]);

    return (
        <div className="flex flex-col h-full items-center justify-center gap-5">
            <div className="text-2xl text-blue-500 font-semibold">Sample Mantine Table With Pagination</div>
            <div className="border border-gray-300 min-w-6xl ">
                <DataTable className=""
                    highlightOnHover={true}
                    records={records}
                    columns={[
                        { accessor: 'name', title: 'Name' },
                        { accessor: 'role', title: 'Role' },
                    ]}
                    totalRecords={data.length}
                    recordsPerPage={PAGE_SIZE}
                    page={page}
                    onPageChange={(p) => setPage(p)}
                />
            </div>
        </div>
    )
}

export default MantineGrid
