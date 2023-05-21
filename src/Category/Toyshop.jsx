import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Mravel from './Mravel';
import Avengers from './Avengers';
import Transformer from './Transformer';

const Toyshop = () => {

    const [marvels, setMarvels] = useState([]);
    const [avengers, setAvengers] = useState([]);
    const [transformers, setTransformers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch(" https://toy-market-server-indol.vercel.app/marvels/subCategory/marvel")
            .then((res) => res.json())
            .then((data) => {
                setMarvels(data);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        fetch(" https://toy-market-server-indol.vercel.app/marvels/subCategory/avengers")
            .then((res) => res.json())
            .then((data) => {
                setAvengers(data);
                setIsLoading(false);
            });
    }, []);

    useEffect(() => {
        fetch(" https://toy-market-server-indol.vercel.app/marvels/subCategory/transformer"
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
                <div className='container mx-auto'>
                    <div className="flex justify-around flex-col md:flex-row items-center gap-11">
                        {marvels.map((marvel) => {
                            return (
                                <Mravel
                                    key={marvel._id}
                                    marvel={marvel}
                                ></Mravel>
                            );
                        })}
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className='container mx-auto'>
                    <div className="flex justify-around flex-col md:flex-row items-center gap-11">
                        {avengers.map((avenger) => {
                            return (
                                <Avengers
                                    key={avenger._id}
                                    avenger={avenger}
                                ></Avengers>
                            );
                        })}
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className='container mx-auto'>
                    <div className="flex justify-around flex-col md:flex-row items-center gap-11">
                        {transformers.map((transformer) => {
                            return (
                                <Transformer
                                    key={transformer._id}
                                    transformer={transformer}
                                ></Transformer>
                            );
                        })}
                    </div>
                </div>
            </TabPanel>
        </Tabs >

    );
};

export default Toyshop;