import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksData = ({markPromise}) => {
    const marksDataRes= use(markPromise);
    const marksData = marksDataRes.data;

    const marksChartData= marksData.map(studentData=>{
        const student={
            id: studentData.id,
            name: studentData.name,
            physics: studentData.physics,
            chemistry: studentData.chemistry,

        }
        return student;
    })
    return (
        <div>
            <BarChart width={500}height={300}data={marksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="physics"fill='yellow'></Bar>
                <Bar dataKey="chemistry"fill='red'></Bar>
                
            </BarChart>
            
        </div>
    );
};

export default MarksData;