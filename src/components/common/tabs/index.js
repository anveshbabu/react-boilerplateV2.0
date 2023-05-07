import { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export function NormalTabs(props) {
    let {
        data = [],
        value = 1,
        onChange=()=>{}
    } = props;
    const [activeTab, setActiveTab] = useState('1');



    useEffect(() => {
        setActiveTab(value);
    }, [value])


    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
        if(onChange){
            onChange(newValue)
        }
        
    };

    return (
        <Box sx={{ width: '100%',mb:5 }}>
            <Tabs
                value={activeTab}
                onChange={handleChange}
            >
                {data.map((iteam) =>
                    <Tab value={iteam.value} label={iteam.label} />
                )}

            </Tabs>
        </Box>
    );
}