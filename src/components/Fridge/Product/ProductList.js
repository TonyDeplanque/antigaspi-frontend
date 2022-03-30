import React from "react";

import './ProductList.scss';
import Counter from "../../common/Counter";
import {updateProduct} from "../../../services/product";
import ExpiryDate from "./ExpiryDate";

const ProductListItem = (props) => {
    const { product } = props;

    const updateProductQuantity = async (quantity) => {
        await updateProduct(product.attributes.fridge.data.id, product.id, {...product, quantity})
    }

    return (
        <div className="product-list-item">
            <div className="product-list-item__top">
                <div  className="product-list-item__top__description">
                    <h5 className="card-title">{product.attributes.food.name}</h5>
                    <p>{product.attributes.food.brand}</p>
                </div>
                <div
                    className="product-list-item__top__image"
                    style={{ backgroundImage: `url(${product.attributes.food.image_url})`, backgroundPosition: 'center center', backgroundSize: 'cover'}}>
                </div>
            </div>
            <div className="product-list-item__bottom">
                <ExpiryDate expiryDate={product.attributes.expiryDate}/>
                <Counter initialValue={product.attributes.quantity} changeCounter={updateProductQuantity}/>
            </div>
        </div>
    )
}



const ProductList = (props) => {
    const { products } = props;
    return (
        <div className="product-list">
        { products.map(p => <ProductListItem key={p.id} product={p}/>)}
        </div>);
}

export default ProductList;