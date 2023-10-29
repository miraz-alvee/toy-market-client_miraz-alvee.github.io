import React from 'react';
import Toyshop from '../Category/Toyshop';
import image from '../../public/cover-pic/avergers-cover.jpg';
import ToySection from '../Category/ToySection';

const Home = () => {

  const bannerSet = (
    <div className="text-center text-white space-y-7 pl-20">
      <h2 className="text-5xl font-bold">Affordable Price for purchasing toys</h2>
      <p>There are many variations of passages available, but the majority have suffered alteration in some form.</p>
      <div>
        <button className="btn btn-success mr-6">Discover More</button>
        <button className="btn btn-outline btn-success">Latest Project</button>
      </div>
    </div>
  );

  return (
    <div>
      {/* Slider/Banner Section */}
      <div className="carousel h-[700px] relative">
        <div className="carousel-item w-full relative">
          <img
            src={image}
            className="w-full rounded-lg"
            style={{
              position: 'absolute',
              opacity: '0.7',
            }}
            alt="Background Image"
          />
          <div className="absolute rounded-lg flex items-center justify-center h-full ">
            {bannerSet}
          </div>
        </div>
      </div>


      {/* Gallery Section */}
      <ToySection></ToySection>
      <section>
        <section className="bg-pink-400 py-5">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl text-white font-bold mb-4">Shop By Cetegory</h1>
            <p className="text-white text-lg mb-8">Explore our wide range of toys and let the fun begin!</p>
          </div>
        </section>
        <Toyshop></Toyshop>
      </section>
    </div>
  );
};

export default Home;