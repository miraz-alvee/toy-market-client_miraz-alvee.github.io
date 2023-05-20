import React from 'react';
import Toyshop from '../Category/Toyshop';

const Home = () => {
  return (
    <div>
      {/* Slider/Banner Section */}
      <section className="bg-gray-900 py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl text-white font-bold mb-4">Welcome to ToyLand!</h1>
          <p className="text-white text-lg mb-8">Explore our wide range of toys and let the fun begin!</p>
          <div className="flex justify-center">
            <img className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3" src="banner-image.jpg" alt="Banner" />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center font-bold mb-4">Toy Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <img className="rounded-lg shadow-md" src="https://i.ibb.co/1dwKWkv/images-q-tbn-ANd9-Gc-Sk-MEz-Bu-Lk-UCRh-Hbcl-XYXFO1-Qdd-Xm-Cp-y6-IQA.jpg" alt="Toy 1" />
            <img className="rounded-lg shadow-md" src="https://i.ibb.co/1dwKWkv/images-q-tbn-ANd9-Gc-Sk-MEz-Bu-Lk-UCRh-Hbcl-XYXFO1-Qdd-Xm-Cp-y6-IQA.jpg" alt="Toy 2" />
            <img className="rounded-lg shadow-md" src="https://i.ibb.co/1dwKWkv/images-q-tbn-ANd9-Gc-Sk-MEz-Bu-Lk-UCRh-Hbcl-XYXFO1-Qdd-Xm-Cp-y6-IQA.jpg" alt="Toy 3" />
            <img className="rounded-lg shadow-md" src="https://i.ibb.co/1dwKWkv/images-q-tbn-ANd9-Gc-Sk-MEz-Bu-Lk-UCRh-Hbcl-XYXFO1-Qdd-Xm-Cp-y6-IQA.jpg" alt="Toy 4" />
            <img className="rounded-lg shadow-md" src="https://i.ibb.co/1dwKWkv/images-q-tbn-ANd9-Gc-Sk-MEz-Bu-Lk-UCRh-Hbcl-XYXFO1-Qdd-Xm-Cp-y6-IQA.jpg" alt="Toy 5" />
            <img className="rounded-lg shadow-md" src="https://i.ibb.co/1dwKWkv/images-q-tbn-ANd9-Gc-Sk-MEz-Bu-Lk-UCRh-Hbcl-XYXFO1-Qdd-Xm-Cp-y6-IQA.jpg" alt="Toy 6" />
            <img className="rounded-lg shadow-md" src="https://i.ibb.co/1dwKWkv/images-q-tbn-ANd9-Gc-Sk-MEz-Bu-Lk-UCRh-Hbcl-XYXFO1-Qdd-Xm-Cp-y6-IQA.jpg" alt="Toy 7" />
            <img className="rounded-lg shadow-md" src="https://i.ibb.co/1dwKWkv/images-q-tbn-ANd9-Gc-Sk-MEz-Bu-Lk-UCRh-Hbcl-XYXFO1-Qdd-Xm-Cp-y6-IQA.jpg" alt="Toy 8" />
          </div>
        </div>
      </section>
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