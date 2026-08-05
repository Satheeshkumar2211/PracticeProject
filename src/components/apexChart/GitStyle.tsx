import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function generateGithubStyleData(startDateStr: string, daysCount: number) {
    let seriesData = [];
    let currentTimestamp = new Date(startDateStr).getTime();

    for (let i = 0; i < daysCount; i++) {
        const randomCommits = Math.random() > 0.3 ? Math.floor(Math.random() * 15) : 0;
        seriesData.push({ x: currentTimestamp, y: randomCommits });
        currentTimestamp += 86400000;
    }
    return seriesData;
}

const GitStyle = () => {
    const [mockCommits] = useState(generateGithubStyleData('2026-01-01', 15));

    const mockSeries = [
        { name: 'commits', data: mockCommits },
        { name: 'commits', data: mockCommits }
    ]
    const commonOptions = {
        chart: { type: 'area', toolbar: { show: false } },
        colors: ['#49a1b6'],
        stroke: { width: 0, curve: 'monotoneCubic' },
        fill: { opacity: 1, type: 'solid' },
        xaxis: { type: 'datetime' },
        grid: { show: false }
    };

    const options: any = {
        ...commonOptions,
        chart: { ...commonOptions.chart, id: 'chart-months', height: 180 },
        yaxis: { labels: { show: false } }
    }; 

    return (
        <div className="flex h-screen justify-center items-center w-screen flex-col gap-5">
            <ReactApexChart options={options} series={mockSeries} type="area" height={400} width={1500} />
        </div>
    );
};
export default GitStyle;
