import React, { useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';

const Mravel = ({ marvel }) => {
    const { _id, toyPictureURL, toyName, price, rating } = marvel;
    const { user } = useContext(authContext);
    return (
        <div className='container mx-auto'>
            {/* <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={toyPictureURL} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toyName}</h2>
                    <p>price: {price}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Detailes</button>
                    </div>
                </div>
            </div> */}


        </div>
    );
};

export default Mravel;