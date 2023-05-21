import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Toyshop = () => {

    const [marevels, setMarevels] = useState([]);
    const [avengers, setAvengers] = useState([]);
    const [transformers, setTransformers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:5000/marvels/subCategory/marvel")
            .then((res) => res.json())
            .then((data) => {
                setMarevels(data);
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
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/1ZDgrC2/images-q-tbn-ANd9-Gc-QJm-Yb-BKqofu-To-XC0gpru-Qi28ka-Yb-PXu-IPy-A.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Spiderman</h2>
                                <p>100</p>
                                <p>4.5</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Viex Detailes</button>
                                </div>
                            </div>
                        </div>

                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/jG2JJ3J/images-q-tbn-ANd9-Gc-Rqden-Rs-VDd-Wbn-R3-Sz-WYEgw-C4-KPo6og38-CNw.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Black Panther</h2>
                                <p>100</p>
                                <p>4.5</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Detailes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/Lp3cPnb/images-q-tbn-ANd9-Gc-Rt8k-Nc-AQdp9-D9a-Bx5-Jo7-Px-Lf2s1-VGe-Ki-HJ9g.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Iron Man</h2>
                                <p>100</p>
                                <p>4.5</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Viex Detailes</button>
                                </div>
                            </div>
                        </div>

                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/264vyL4/images-q-tbn-ANd9-Gc-RU1dp-Uk3-SEOf7-SFPw5-LIc-U6-YDr-E-GUs-J2rwv-Rf4-Uxn0-HMSN3-BLOu-E953-Yz-Tg-Xc.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Hulk</h2>
                                <p>100</p>
                                <p>4.5</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Viex Detailes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/1Lwx35P/images-q-tbn-ANd9-Gc-RW-jb-Przb-Fs07n491-W0zp-Tlw1nf-PUOPNXc9c-Ypy-Re-Upn-Cd67-Acm-HI0-Of-EId-Yjjb-Z.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Hasbo</h2>
                                <p>100</p>
                                <p>4.5</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Viex Detailes</button>
                                </div>
                            </div>
                        </div>

                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/YNPr61h/images-q-tbn-ANd9-Gc-TODHx-IUOuh-FGv9-Ch-D2-MRi-Ngdx-X6-JOGf3-LAXx-PKJ4-Sq-WKThy-Gxdr-Egr-Fyb-RYGK9q.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Lukim</h2>
                                <p>100</p>
                                <p>4.5</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Viex Detailes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>
        </Tabs>

    );
};

export default Toyshop;