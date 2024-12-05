import React from 'react';
import './List.css';

const List = ({ products, onEdit, onDelete }) => {
    return (
        <div className="List">
        <div className="Listto">
            <div className="Listcol">
                <p>Your Products List</p>
                <table className="List-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="no-products">No Products Available</td>
                            </tr>
                        ) : (
                            products.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <img
                                            src={item.image ? URL.createObjectURL(item.image) : 'default-image.jpg'}
                                            alt={item.name}
                                            className="product-image"
                                        />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>Rs.{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <button className="edit" onClick={() => onEdit(index)}>Edit</button>
                                        <button className="delete" onClick={() => onDelete(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default List;
