import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Mravel from './Mravel';

const Toyshop = () => {

    const [marvels, setMarvels] = useState([]);
    const [avengers, setAvengers] = useState([]);
    const [transformers, setTransformers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:5000/marvels/subCategory/marvel")
            .then((res) => res.json())
            .then((data) => {
                setMarvels(data);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        fetch("http://localhost:5000/marvels/subCategory/avengers")
            .then((res) => res.json())
            .then((data) => {
                setAvengers(data);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        fetch("http://localhost:5000/marvels/subCategory/transformer"
        )
            .then((res) => res.json())
            .then((data) => {
                setTransformers(data);
                setIsLoading(false);
            });
    }, []);

    return (
        <Tabs>
            <TabList className='bg-slate-200 py-3'>
                <Tab>Marvel</Tab>
                <Tab>Avenges</Tab>
                <Tab>Transformer</Tab>
            </TabList>
            <TabPanel>
                <div className="flex flex-col md:flex-row items-center  gap-11 justify-center">
                    {marvels.map((marvel) => {
                        return (
                            <Mravel
                                key={marvel._id}
                                marvel={marvel}
                            ></Mravel>
                        );
                    })}
                </div>
            </TabPanel>
        </Tabs >

    );
};

export default Toyshop;