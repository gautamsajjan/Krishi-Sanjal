import React, { useState, useEffect } from 'react';
import './AddPopUp.css';
import { assets } from '../../assets/assets';

const AddPopUp = ({ onClose, onAddProduct, product }) => {
    const [image, setImage] = useState(product ? product.image : null);

    useEffect(() => {
        if (product) {
            setImage(product.image);
        }
    }, [product]);

    const handleClose = (event) => {
        event.preventDefault();
        if (onClose) onClose();
    };

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const productData = {
            image,
            name: e.target.name.value,
            description: e.target.description.value,
            category: e.target.category.value,
            price: e.target.price.value,
            quantity: e.target.quantity.value,
            nutrition: e.target.nutrition.value,
            shelfLife: e.target.shelfLife.value,
        };

        if (onAddProduct) onAddProduct(productData);
        if (onClose) onClose();
    };

    return (
        <div className="add">
            <form onSubmit={handleSubmit} className="pop">
                <button className="close-btn" onClick={handleClose}>✖</button>
                <div className="upload-img">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img
                            src={image ? URL.createObjectURL(image) : assets.upimg}
                            alt="Upload image"
                        />
                    </label>
                    <input onChange={handleImageChange} type="file" id="image" hidden />
                </div>
                <div className="p-name">
                    <p>Product Name</p>
                    <input type="text" name="name" placeholder="e.g. Oranges" defaultValue={product ? product.name : ''} required />
                </div>
                <div className="p-description">
                    <p>Product Description</p>
                    <textarea name="description" rows="2" placeholder="Describe your Product" defaultValue={product ? product.description : ''} required></textarea>
                </div>
                <div className="p-category">
                    <p>Product Category</p>
                    <select name="category" defaultValue={product ? product.category : ''} required>
                        <option value="Fruits">Fruits</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Meat and Poultry">Meat and Poultry</option>
                        <option value="Grains and Cereals">Grains and Cereals</option>
                        <option value="Dairy Products">Dairy Products</option>
                        <option value="Pickles and Other Products">Pickles and Other Products</option>
                    </select>
                </div>
                <div className="ppstock">
                    <div className="p-price">
                        <p>Product Price</p>
                        <input type="number" name="price" placeholder="e.g. Rs.100/kg" defaultValue={product ? product.price : ''} required />
                    </div>
                    <div className="p-stock">
                        <p>Product Quantity</p>
                        <input type="text" name="quantity" placeholder="e.g. 50 kg" defaultValue={product ? product.quantity : ''} required />
                    </div>
                </div>
                <div className="p-nut-sto">
                    <div className="p-Nut">
                        <p>Nutritional Value</p>
                        <input type="text" name="nutrition" placeholder="e.g. 460 calories" defaultValue={product ? product.nutrition : ''} />
                    </div>
                    <div className="p-Sto">
                        <p>Shelf Life</p>
                        <input type="text" name="shelfLife" placeholder="2 days at room temp...." defaultValue={product ? product.shelfLife : ''} />
                    </div>
                </div>
                <button type="submit" className="btn1">Add Product</button>
            </form>
        </div>
    );
};

export default AddPopUp;
