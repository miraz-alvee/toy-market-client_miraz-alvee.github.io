import React, { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
const AddToys = () => {
    const { user } = useContext(authContext);

    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const toyPhotoURL = form.toyPictureURL.value;
        const toyName = form.toyName.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availableQuantity = form.availableQuantity.value;
        const detailDescription = form.detailDescription.value;
        const toyDetails = {
            toyPhotoURL: toyPhotoURL,
            toyName: toyName,
            sellerName: sellerName,
            sellerEmail: sellerEmail,
            subCategory: subCategory,
            price: price,
            rating: rating,
            availableQuantity: availableQuantity,
            detailDescription: detailDescription,
        };

        fetch(" https://toy-market-server-indol.vercel.app/marvels", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(toyDetails),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged == true) {
                    Swal.fire({
                        title: "Added Successfully!",
                        icon: "success",
                        showConfirmButton: false,
                    });
                    form.reset();
                } else {
                    alert("Waring! Failed to Add.");
                }
            });
    };
    return (
        <div>
            <div className="hero   bg-base-200">
                <div className="hero-content w-4/5">
                    <div className="card w-4/5 shadow-2xl bg-base-100">
                        <form onSubmit={handleAddToy} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Photo URL</span>
                                </label>
                                <input
                                    name="toyPictureURL"
                                    type="url"
                                    placeholder="Toy Photo URL"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Toy Name</span>
                                </label>
                                <input
                                    name="toyName"
                                    type="text"
                                    placeholder="Toy Name"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <input
                                    defaultValue={user.displayName ? user.displayName : ""}
                                    name="sellerName"
                                    type="text"
                                    placeholder="Seller Name"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <input
                                    defaultValue={user.email}
                                    name="sellerEmail"
                                    type="email"
                                    placeholder="Seller Email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Sub Category</span>
                                </label>
                                <select name="subCategory" className="select select-bordered">
                                    <option value="">Select Sub Category</option>
                                    <option value="Marvel">Marvel</option>
                                    <option value="Avengers">Avengers</option>
                                    <option value="Transformer">Transformer</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    name="price"
                                    type="text"
                                    placeholder="Price"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input
                                    name="rating"
                                    type="text"
                                    placeholder="Rating"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <input
                                    name="availableQuantity"
                                    type="text"
                                    placeholder="Available Quantity"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Detail Description</span>
                                </label>
                                <input
                                    name="detailDescription"
                                    type="text"
                                    placeholder="Detail Description"
                                    className="input input-bordered"
                                />
                            </div>

                            <div className="form-control mt-6">
                                <button
                                    type="submit"
                                    className="btn bg-green-400 hover:bg-green-500 border-none"
                                >
                                    Add Toy Car
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToys;