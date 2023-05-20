import React, { useEffect, useState } from 'react';

const AllToys = () => {
    const [alltoys, setAlltoys] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/marvels')
            .then(res => res.json())
            .then(data => setAlltoys(data));
    }, []);

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const filteredToys = alltoys.filter(toy => toy.toyName.toLowerCase().includes(search.
    toLowerCase()));

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl text-center font-bold mb-4">All Toys</h1>
            <div className="overflow-x-auto">
                {/* Search Input */}
                <div className="mb-4">
                    <input type="text" placeholder="Search by Toy Name" value={search} 
                    onChange={handleSearchChange}
                    className="border border-gray-300 rounded-md py-2 px-4 w-2/5"/>
                </div>

                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredToys.map((toy) => (
                            <tr key={toy._id} toy={toy}>
                                <th>1</th>
                                <td>{toy.sellerName}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.subCategory}</td>
                                <td>${toy.price}</td>
                                <td>{toy.availableQuantity}</td>
                                <td>
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">View Details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default AllToys;
