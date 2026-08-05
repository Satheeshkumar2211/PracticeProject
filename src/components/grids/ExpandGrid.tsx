import React, { useState } from 'react';

interface GridItem {
    id: number;
    code: string;
    name: string;
    department: string;
    promptName?: string;
    details?: string;
}

const sampleData: GridItem[] = [
    { id: 1, code: 'HR', name: 'Onboarding Flow', department: 'Human Resources' },
    { id: 2, code: 'AI', name: 'Text Summarizer', department: 'Engineering', promptName: 'Summarize_v2_Final', details: 'Uses GPT-4 with a temperature of 0.3. Maximizes token efficiency.' },
    { id: 3, code: 'FIN', name: 'Expense Tracker', department: 'Finance' },
    { id: 4, code: 'AI', name: 'Image Generator', department: 'Design', promptName: 'Stable_Diff_Anime', details: 'Generates high-resolution styling parameters for marketing banners.' },
];

export default function ExpandGrid() {
    const [expandedRowId, setExpandedRowId] = useState<number | null>(null);

    const toggleRow = (id: number) => {
        setExpandedRowId(expandedRowId === id ? null : id);
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-6 bg-slate-50 rounded-2xl">
            <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">

                <div className="grid grid-cols-4 bg-slate-50/70 backdrop-blur-sm px-6 py-4 font-semibold text-slate-600 border-b border-slate-200 text-xs uppercase tracking-wider">
                    <div>Code</div>
                    <div>Name</div>
                    <div>Department</div>
                    <div className="text-right">Actions</div>
                </div>

                <div className="divide-y divide-slate-100">
                    {sampleData.map((item) => {
                        const isAiRow = item.code === 'AI';
                        const isExpanded = expandedRowId === item.id;

                        return (
                            <React.Fragment key={item.id}>
                                <div
                                    className={`grid grid-cols-4 px-6 py-4 text-sm items-center transition-all duration-300 ${isAiRow && isExpanded
                                            ? 'bg-blue-50/30'
                                            : isAiRow
                                                ? 'hover:bg-blue-50/20'
                                                : 'hover:bg-slate-50/50'
                                        }`}
                                >
                                    <div>
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold tracking-wide border transition-all duration-300 ${isAiRow
                                                ? 'bg-blue-50 text-blue-700 border-blue-200/60 shadow-sm shadow-blue-100'
                                                : 'bg-slate-50 text-slate-600 border-slate-200'
                                            }`}>
                                            {item.code}
                                        </span>
                                    </div>

                                    <div className="font-medium text-slate-800">{item.name}</div>

                                    <div className="text-slate-500 font-normal">{item.department}</div>

                                    <div className="text-right">
                                        {isAiRow ? (
                                            <button
                                                onClick={() => toggleRow(item.id)}
                                                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all duration-300 group ${isExpanded
                                                        ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200'
                                                        : 'bg-white text-blue-600 border-blue-200 hover:bg-blue-50 hover:border-blue-300'
                                                    }`}
                                            >
                                                <span>{isExpanded ? 'Hide Details' : 'View Prompt'}</span>
                                                <svg
                                                    className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'group-hover:translate-y-0.5'}`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2.5}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                        ) : (
                                            <span className="text-slate-300 select-none">—</span>
                                        )}
                                    </div>
                                </div>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out border-l-4 border-blue-500 bg-slate-50/40 ${isAiRow && isExpanded
                                            ? 'grid-rows-[1fr] opacity-100 border-l-blue-500'
                                            : 'grid-rows-[0fr] opacity-0 pointer-events-none border-l-transparent'
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-6 py-5 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-inner bg-linear-to-b from-slate-50/50 to-white">

                                            <div className="md:col-span-1 border-r border-slate-200/60 pr-4">
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                                                    Configured Prompt
                                                </span>
                                                <div className="bg-slate-900 text-slate-100 font-mono text-xs px-3 py-2 rounded-lg border border-slate-800 shadow-inner flex items-center justify-between group">
                                                    <span>{item.promptName}</span>
                                                    <button
                                                        className="text-slate-500 hover:text-white transition-colors p-0.5 rounded"
                                                        title="Copy prompt name"
                                                        onClick={() => item.promptName && navigator.clipboard.writeText(item.promptName)}
                                                    >
                                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="md:col-span-2">
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                                                    Operational Overview
                                                </span>
                                                <p className="text-slate-600 text-xs leading-relaxed antialiased bg-white p-3 rounded-lg border border-slate-200/50 shadow-sm">
                                                    {item.details}
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
