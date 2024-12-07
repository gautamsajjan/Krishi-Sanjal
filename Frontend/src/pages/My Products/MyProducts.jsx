import React, { useState } from 'react';
import './MyProducts.css';
import { assets } from '../../assets/assets';
import VegetableImage from '../../assets/vegetable.png';
import FruitImage from '../../assets/Fruits.png';
import DairyImage from '../../assets/dairy.jpg';
import MeatImage from '../../assets/Meat.png';
import GrainsImage from '../../assets/grains.jpg';
import PickleImage from '../../assets/Pickle.png';
import AddPopUp from '../../Components/AddPopUp/AddPopUp';
import List from '../../Components/List/List';

const MyProducts = () => {
    const category = [
        {
            id: 1,
            imgSrc: FruitImage,
            title: "Fruits",
            description: "Add Your Organic fruits picked with care and love",
            btn: "Add Product",
        },
        {
            id: 2,
            imgSrc: VegetableImage,
            title: "Vegetables",
            description: "Add your Fresh veggies directly from the your Farm",
            btn: "Add Product",
        },
        {
            id: 3,
            imgSrc: MeatImage,
            title: "Meat and Poultry",
            description: "Add your fresh and ethically sourced meat and eggs",
            btn: "Add Product",
        },
        {
            id: 4,
            imgSrc: GrainsImage,
            title: "Grains and Cereals",
            description: "Add your wholesome grains and cereals for a healthy diet",
            btn: "Add Product",
        },
        {
            id: 5,
            imgSrc: DairyImage,
            title: "Dairy Products",
            description: "Add your High-quality milk, cheese, butter and other dairy products",
            btn: "Add Product",
        },
        {
            id: 6,
            imgSrc: PickleImage,
            title: "Pickles and other Products",
            description: "Add your homemade pickles, natural honey and other unique products, offering authentic taste ",
            btn: "Add Product",
        },
    ];

    const [addpop, setAddPop] = useState(false);
    const [products, setProducts] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editProduct, setEditProduct] = useState(null);

    const handlePopupOpen = () => {
        setAddPop(true);
    };

    const handlePopupClose = () => {
        setAddPop(false);
    };

    const handleAddProduct = (productData) => {
        if (editIndex !== null) {
            const updatedProducts = [...products];
            updatedProducts[editIndex] = productData;
            setProducts(updatedProducts);
            setEditIndex(null);
            setEditProduct(null);
        } else {
            setProducts((prevProducts) => [...prevProducts, productData]);
        }
        setAddPop(false);
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditProduct(products[index]);
        setAddPop(true);
    };

    const handleDelete = (index) => {
        const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
    };

    return (
        <div className='My-Products'>
            <div className='Products'>
                <div className='bg'>
                    <div className='txt2'>
                        <p>Your Produce
                            <br />Your Price
                            <br />Your Marketplace</p>
                    </div>
                    <div className='img1'>
                        <img src={assets.backimg} alt="background" />
                    </div>
                </div>
            </div>
            <div className='plist' id='product-list'>
                <section className="box">
                    {category.map((article) => (
                        <article key={article.id}>
                            <div className="article-wrapper">
                                <figure>
                                    <img src={article.imgSrc} alt={article.title} />
                                </figure>
                                <div className="article-body">
                                    <h2>{article.title}</h2>
                                    <p>{article.description}</p>
                                    <br />
                                    <br />
                                    <button onClick={handlePopupOpen}>{article.btn}</button>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
            {addpop && <AddPopUp onClose={handlePopupClose} onAddProduct={handleAddProduct} product={editProduct} />}
            <List products={products} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default MyProducts;
