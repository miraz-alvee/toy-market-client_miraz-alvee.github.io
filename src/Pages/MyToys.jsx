import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../Providers/AuthProvider";

const MyToys = () => {

    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(authContext);
    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        fetch(` https://toy-market-server-indol.vercel.app/myToys/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyToys(data);
                setIsLoading(false);
            });
    }, [user?.email]);

    return (
        <div className="overflow-x-auto w-full p-6">
            {isLoading ? (
                <div className="text-center">
                    <img
                        className="h-40 w-40  mx-auto"
                        src="https://cdn.pixabay.com/animation/2022/10/11/03/16/03-16-39-160_512.gif"
                        alt=""
                    />
                </div>
            ) : (
                <div>
                    <div className="flex justify-center items-center gap-7">
                        <div>
                            <h2 className="font-bold text-3xl text-green-500">
                                Added Toys Information
                            </h2>
                        </div>
                        {/* <div className="bg-slate-200 p-2 rounded-xl">
                            <h3 className="font-bold text-center">Sort by Price</h3>
                            <ul className="menu menu-horizontal  rounded-box">
                                <ul className="rounded-box ">
                                    <li>
                                         <a onClick={handleSort}>
                      {sortOrder === "asc" ? "Low to High" : "High to Low"}
                    </a> 
                                    </li>
                                </ul>
                            </ul>
                        </div> */}
                    </div>
                    <table className="table mx-auto mt-28">
                        <thead>
                            <tr>
                                <th>Seller Info</th>
                                <th>Toy Info</th>
                                <th>Price</th>
                                <th>Rating</th>
                                <th>Available Quantity</th>
                                <th>Description</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {myToys.map((mytoy) => (
                                <tr key={mytoy._id} toy={mytoy}>
                                    <th>1</th>
                                    <td>{mytoy.sellerName}</td>
                                    <td>{mytoy.toyName}</td>
                                    <td>{mytoy.subCategory}</td>
                                    <td>${mytoy.price}</td>
                                    <td>{mytoy.availableQuantity}</td>
                                    <td>
                                        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">View Details</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyToys;