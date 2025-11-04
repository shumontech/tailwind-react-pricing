import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';


const resultData= [
  { "id": 1, "name": "Ayesha", "physics": 85, "chemistry": 78 },
  { "id": 2, "name": "Rahim", "physics": 72, "chemistry": 69 },
  { "id": 3, "name": "Karim", "physics": 90, "chemistry": 88 },
  { "id": 4, "name": "Sumaiya", "physics": 68, "chemistry": 74 },
  { "id": 5, "name": "Tariq", "physics": 95, "chemistry": 91 },
  { "id": 6, "name": "Lamia", "physics": 78, "chemistry": 82 },
  { "id": 7, "name": "Sajid", "physics": 88, "chemistry": 85 },
  { "id": 8, "name": "Farhana", "physics": 82, "chemistry": 80 },
  { "id": 9, "name": "Imran", "physics": 60, "chemistry": 65 },
  { "id": 10, "name": "Nadia", "physics": 74, "chemistry": 70 }
]


const ResultChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                  <Line dataKey={"physics"}></Line>
                  <Line dataKey={"chemistry"} stroke='red'></Line>

            </LineChart>
          
        </div>
    );
};

export default ResultChart;