import React from 'react';
import { 
    BarChart, 
    CartesianGrid, 
    XAxis, 
    YAxis, 
    Tooltip, 
    ResponsiveContainer,
    Legend, 
    Bar
} from './../../../../components/recharts';

import colors from './../../../../colors';

const data = [
      {name: 'Paper', session1: 4000, session2: 2400, amt: 2400},
      {name: 'Glass', session1: 3000, session2: 1398, amt: 2210},
      {name: 'Plastic', session1: 2000, session2: 9800, amt: 2290},
      {name: 'Smoking', session1: 2780, session2: 3908, amt: 2000},
      {name: 'Organics', session1: 1890, session2: 4800, amt: 2181},
      {name: 'CDL_Waste', session1: 2390, session2: 3800, amt: 2500},
      {name: 'Hazardous Material', session1: 3490, session2: 4300, amt: 2100},
];

const SimpleBarChart = () => (
    <ResponsiveContainer width='100%' aspect={6.0/3.0}>
        <BarChart 
            data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip
                contentStyle={{
                    background: colors['900'],
                    border: `1px solid ${colors['900']}`,
                    color: colors['white']
                }}
            />
            <Legend wrapperStyle={{ color: colors['900'] }}/>
            <Bar dataKey="session1" fill={ colors['primary'] } barSize={ 5 } />
            <Bar dataKey="session2" fill={ colors['purple'] } barSize={ 5 } />
        </BarChart>
    </ResponsiveContainer>

)

export { SimpleBarChart };
