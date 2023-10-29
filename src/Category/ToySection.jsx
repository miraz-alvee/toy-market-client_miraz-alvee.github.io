import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import image8 from '../../public/cover-pic/download1.jpg';
import image1 from '../../public/cover-pic/download2.jpg';
import image2 from '../../public/cover-pic/download3.jpg';
import image5 from '../../public/cover-pic/download4.jpg';
import image6 from '../../public/cover-pic/download5.jpg';
import image7 from '../../public/cover-pic/download6.jpg';
import image3 from '../../public/cover-pic/download7.jpg';
import image4 from '../../public/cover-pic/download8.jpg';
import image9 from '../../public/cover-pic/download9.jpg';

const ToySection = () => {
    useEffect(() => {
        AOS.init(); // Initialize AOS
    }, []);

    return (
        <div className='mt-10 mb-10'>
            <section
                id="gallery"
                className="py-10 bg-gray-100 rounded-lg" 
            >
                <h2 className="text-3xl text-center font-bold mb-4">Toy Gallery</h2>
                <div className="container mx-auto ml-10 mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                        <div data-aos="flip-right" data-aos-duration="2000">
                            <img className="rounded-lg shadow-md h-[270px] w-4/5" src={image1} alt="Toy 1" />
                        </div>
                        <div data-aos="flip-right" data-aos-duration="2000">
                            <img className="rounded-lg shadow-md h-[270px] w-4/5" src={image2} alt="Toy 2" />
                        </div>
                        <div data-aos="flip-right" data-aos-duration="2000">
                            <img className="rounded-lg shadow-md h-[270px] w-4/5" src={image3} alt="Toy 3" />
                        </div>
                        <div data-aos="flip-right" data-aos-duration="1500">
                            <img className="rounded-lg shadow-md h-[270px] w-4/5" src={image4} alt="Toy 4" />
                        </div>
                        <div data-aos="flip-right" data-aos-duration="1500">
                            <img className="rounded-lg shadow-md h-[270px] w-4/5" src={image5} alt="Toy 5" />
                        </div>
                        <div data-aos="flip-right" data-aos-duration="1500">
                            <img className="rounded-lg shadow-md h-[270px] w-4/5" src={image8} alt="Toy 5" />
                        </div>
                        <div data-aos="flip-right" data-aos-duration="1500">
                            <img className="rounded-lg shadow-md h-[270px] w-4/5" src={image9} alt="Toy 5" />
                        </div>
                        <div data-aos="flip-right" data-aos-duration="1500">
                            <img className="rounded-lg shadow-md h-[270px] w-4/5" src={image6} alt="Toy 6" />
                        </div>
                        <div data-aos="flip-right" data-aos-duration="1500">
                            <img className="rounded-lg shadow-md h-[270px] w-4/5" src={image7} alt="Toy 7" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ToySection;
